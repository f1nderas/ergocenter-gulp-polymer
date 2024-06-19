// form-textarea.js
import { html } from "@polymer/polymer";
import Base from "../_base.js";
class FormTextarea extends Base {
  static get is() {
    return "form-textarea";
  }

  static get properties() {
    return {
      label: String,
      idProperty: String,
      placeholder: String,
      value: {
        type: String,
        notify: true,
        value: "",
      },
    };
  }

  static get template() {
    return html`
      <div class="form-group form-group--textarea">
        <label for$="[[idProperty]]" class="form-label">[[label]]</label>
        <textarea
          id="[[idProperty]]"
          class="form-textarea"
          placeholder="[[placeholder]]"
          value="{{value::input}}"
        ></textarea>
      </div>
    `;
  }
}

customElements.define(FormTextarea.is, FormTextarea);

export default FormTextarea;
