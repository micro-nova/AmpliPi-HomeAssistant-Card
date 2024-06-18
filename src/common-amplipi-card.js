const LitElement = Object.getPrototypeOf(
    customElements.get("ha-panel-lovelace")
);
const html = LitElement.prototype.html;

export class CommonAmplipiCard extends LitElement {

    static get properties() {
        return {
            _hass: {},
            _config: {},
        }
    }

    constructor() {
        super();
        this.loadCardHelpers();
        this.addMediaPlayer();
        this._num_zones = 0;
    }


    static getStubConfig() {
      return { entity: "" };
    }
    

    async loadCardHelpers() {
        this._helpers = await (window).loadCardHelpers();
        if(this._helpersResolve) {
            this._helpersResolve();
        }
    }

    get hass() {
        return this._hass;
    }

    _loadSourcePlayer(source, is_source = false) {
        if(source === undefined) {
            return undefined;
        }
        var source_id;

        if(!is_source) {
            const source_num = source.split(' ')[1] - 1;
            for (var [name, entity] of Object.entries(this._hass.states)) {
                if(entity.attributes.amplipi_source_id !== undefined 
                    && entity.attributes.amplipi_source_id === source_num
                ) {
                    source_id = name;
                }
            }
        }
        else {
            source_id = source;
        }
        let source_player_config = {
            "type": "custom:mini-media-player",
            "entity": source_id,
            "group": "true",
            "source": "full",
            "hide": {
                "volume": "true",
                "controls": "true",
                "info": "true",
                "name": "true",
                "power": "true"
            }
        }

        if(this._config.media_config instanceof Object) {
            source_player_config = {...source_player_config, ...this._config.media_config};
        }

        var player;
        player = this._helpers.createCardElement(source_player_config);
        player.hass = this._hass;
        this.triggerRender();
        return player
    }


    _loadControlsPlayer(source, is_source = false) {
        if(source === undefined) {
            this.source = undefined;
            return undefined;
        }
        var source_id;
        let supports_pause = false;
        let supports_stop = false;
        var features;
        if(!is_source) {
            const source_num = source.split(' ')[1] - 1;
            for (var [name, entity] of Object.entries(this._hass.states)) {
                if(entity.attributes.amplipi_source_id !== undefined 
                    && entity.attributes.amplipi_source_id === source_num
                ) {
                    source_id = name;
                    features = entity.attributes.supported_features;
                }
            }
        } 
        else {
            source_id = source;
            features = this._hass.states[source].attributes.supported_features;
        }

        if((features | 1) === features) {
            supports_pause = true;
        }
        else if((features | 4096) === features) {
            supports_stop = true;
        }

        this.source = source;
        let source_player_config = {
            "type": "custom:mini-media-player",
            "entity": source_id,
            "group": "true",
            "hide": {
                "volume": "true",
                "info": "true",
                "name": "true",
                "power": "true",
                "source": "true",
                "icon": "true"
            }
        }

        if(!supports_pause) {
            source_player_config.hide.play_pause = true;
            if(supports_stop) {
                source_player_config.hide.play_stop = false;
            }
        }
        else {
            source_player_config.hide.play_stop = true;
        }


        if(this._config.media_config instanceof Object) {
            source_player_config = {...source_player_config, ...this._config.media_config};
        }

        var player;
        player = this._helpers.createCardElement(source_player_config);
        player.hass = this._hass;
        this.triggerRender();
        return player
    }

    triggerRender() {
        this.trigger = Math.random();
        this.requestUpdate();
    }
}