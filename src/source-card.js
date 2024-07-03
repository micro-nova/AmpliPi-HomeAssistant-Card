const LitElement = Object.getPrototypeOf(
    customElements.get("ha-panel-lovelace")
);
const html = LitElement.prototype.html;

import {CommonAmplipiCard} from "./common-amplipi-card";

export class AmplipiSourceCard extends CommonAmplipiCard {

    static getConfigElement() {
        return document.createElement("amplipi-source-card-editor");
    }

    setConfig(config) {
        this._config = config;
        this._source = config.entity;
    }

    static getStubConfig() {
        return {name: "AmpliPi Source", entity: ""};
    }

    set hass(hass) {
        this._hass = hass;
        if(this._media_player) {
            this._media_player.hass = hass;
        }

        if(this._source_player) {
            this._source_player.hass = hass;
        }

        if(this._helpers 
            && this.source != this._hass.states[this._source].attributes.source) {
                this._source_player = this._loadSourcePlayer(this._source, true);
                this._controls_player = this._loadControlsPlayer(this._source, true);
                this._zone_players = this._loadZonePlayers(this._findZoneNames());
            }

        if(this._controls_player) {
            this._controls_player.hass = hass;
        }

        if(this._hassResolve) this._hassResolve();
    }

    render() {
        if(!this._hass || !this._config) {
            return html `...`;
        }
        return html `
        <ha-card header="${this._config.name}" style="padding: 1.5rem;">
        <b>Now Playing:</b> ${this._hass.states[this._source].attributes.media_album_artist} - ${this._hass.states[this._source].attributes.media_track}
            ${this._media_player == undefined ? "..." : this._media_player}
            ${this._source_player == undefined ? "..." : this._source_player}
            ${this._zone_players == undefined ? "..." : this._zone_players}
            ${this._controls_player == undefined ? "..." : this._controls_player}
        </ha-card>`;
    }
    

    _loadZonePlayers(zone_names) {
        let zone_player_configs = {};
        let zone_players = [];
        for (var zone of zone_names) {
            zone_player_configs.zone = {
                "type": "custom:mini-media-player",
                "entity": zone,
                "group": "true",
                "source": "icon",
                "hide": {
                    "power": "true",
                    "controls": "true",
                    "info": "true",
                    "icon": "true",
                    "source": "true"
                }
            }

            if(this._config.media_config instanceof Object) {
                zone_player_configs.zone = {...zone_player_configs.zone, ...this._config.media_config};
            }

            var zone_player;
            zone_player = this._helpers.createCardElement(zone_player_configs.zone);
            zone_player.hass = this._hass;
            zone_players.push(zone_player);
            this.triggerRender();
        }
        return zone_players
    }

    _findZoneNames() {
        const zone_ids = this._hass.states[this._source].attributes.amplipi_source_zones;
        let zone_names = [];

        Object.keys(this._hass.states).forEach((key) => {
            if(this._hass.states[key].attributes.amplipi_zone_id !== undefined
                && zone_ids.includes(this._hass.states[key].attributes.amplipi_zone_id)) {
                    zone_names.push(this._hass.states[key].entity_id);
            }
        });
        return zone_names;
    }
    
    async addMediaPlayer() {
        if(this._helpers === undefined) {
            await new Promise((resolve => (this._helpersResolve = resolve)));
        }
        if(this._hass === undefined) {
            await new Promise((resolve) => (this._hassResolve = resolve));
        }

        this._hassResolve = undefined;
        this._helpersResolve = undefined;
        
        console.log(this._source);
        if(this._source) {
            let media_config = {
                "type": "custom:mini-media-player",
                "entity": this._source,
                "group": "false",
                "artwork": "cover",
                "hide": {
                    "info": "true",
                    "source": "true",
                    "power": "true",
                    "name": "true",
                    "icon": "true"
                }
            };
            if(this._config.media_config instanceof Object) {
                media_config = {...media_config, ...this._config.media_config};
            }

            this._media_player = this._helpers.createCardElement(media_config);
            this._media_player.hass = this._hass;
            this._source_player = this._loadSourcePlayer(this._source, true);
            this._controls_player = this._loadControlsPlayer(this._source, true);
            this._zone_players = this._loadZonePlayers(this._findZoneNames());    
        }

        this.triggerRender();
    }

}