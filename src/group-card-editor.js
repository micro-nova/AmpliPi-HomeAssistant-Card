const LitElement = Object.getPrototypeOf(
    customElements.get("ha-panel-lovelace")
);
const html = LitElement.prototype.html;

import {CommonAmplipiCardEditor} from "./common-amplipi-editor";

export class AmplipiGroupCardEditor extends CommonAmplipiCardEditor {
    render() {

        let entities = [""].concat(
            Object.keys(this.hass.states).filter(
              eid => eid.substr(0, eid.indexOf(".")) === "media_player"
            )
          );
        if(!this.hass || !this._config) {
            return html ``;
        }
        return html`
        <h2>Name</h2>
        <input
        type="text"
        .value=${this._config.name}
        @focusout=${this._nameChanged}
        ></input>

        <h2>Group</h2>
        <div class="group-select">
            <select
            @change=${this._entityChanged}>
            <option value="${this._config.entity}">${this._config.entity == "" ? "Select a Group" : this.hass.states[this._config.entity].attributes.friendly_name}</option>
            ${
                entities.map(entity => {
                    if(this.hass.states[entity] !== undefined
                        && this.hass.states[entity].attributes.amplipi_zones !== undefined
                        && entity != this._config.entity
                    ) {
                        return html `
                        <option value="${entity}">${this.hass.states[entity].attributes.friendly_name}</option>`;
                    }
                })
            }
            </select>
        </div>
        `;
    }
}
