const LitElement = Object.getPrototypeOf(
    customElements.get("ha-panel-lovelace")
);
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;

export class CommonAmplipiCardEditor extends LitElement {
    static get properties() {
        return {
            hass: {},
            _config: {}
        };
    }

    setConfig(config) {
        this._config = config;
    }

    _entityChanged(ev) {
        const _config = Object.assign({}, this._config);

        _config.entity = ev.target.value;
        this._config = _config;
        const event = new CustomEvent("config-changed", {
            detail: {config: _config},
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }
    
    _nameChanged(ev) {
        const _config = Object.assign({}, this._config);

        _config.name = ev.target.value;
        this._config = _config;
        const event = new CustomEvent("config-changed", {
            detail: {config: _config},
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }


    get _entity() {
        return this._config.entity || "";
    }

    static styles = css `
        select {
            width: 80%;
            padding: 16px;
            border: none;
            border-radius: 12px;
            background-color: #DDDDDD;
        }
        
        select:hover {
            background-color: #CCCCCC;
        }

        input{
            width: 80%;
            padding: 16px;
            border: none;
            border-bottom: 2px solid blue;
            background-color: #FFFFFF;
        }
    `;
}
