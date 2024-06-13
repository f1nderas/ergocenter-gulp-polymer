// form-checkbox.js
import { html } from "@polymer/polymer";
import Base from "./base.js";
class FormCheckbox extends Base {
  static get is() {
    return "form-checkbox";
  }

  static get properties() {
    return {
      label: String,
      idProperty: String,
      checked: {
        type: Boolean,
        notify: true,
      },
    };
  }

  static get template() {
    return html`
      <div class="form-group custom-checkbox">
        <label for$="[[idProperty]]" class="form-label">[[label]]</label>
        <input
          type="checkbox"
          id="[[idProperty]]"
          class="form-checkbox"
          checked="{{checked}}"
        />
      </div>
    `;
  }
}

customElements.define(FormCheckbox.is, FormCheckbox);

export default FormCheckbox;
