// form-number.js
import { html } from "@polymer/polymer";
import Base from "./base";
class FormNumber extends Base {
  static get is() {
    return "form-number";
  }

  static get properties() {
    return {
      label: String,
      idProperty: String,
      value: {
        type: Number,
        notify: true,
      },
      step: {
        type: Number,
        value: 1,
      },
    };
  }

  static get template() {
    return html`
      <div class="form-group">
        <label for$="[[idProperty]]" class="form-label">[[label]]</label>
        <div class="input-container">
          <input
            type="number"
            id="[[idProperty]]"
            class="form-input"
            value="{{value}}"
            step="[[step]]"
          />
          <div class="arrow-up arrow-up-js"></div>
          <div class="arrow-down arrow-down-js"></div>
        </div>
      </div>
    `;
  }
}

customElements.define(FormNumber.is, FormNumber);

export default FormNumber;
