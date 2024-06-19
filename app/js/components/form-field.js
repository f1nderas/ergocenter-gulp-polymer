import { html } from "@polymer/polymer";
import Base from "./_base.js";

class FormField extends Base {
  static get is() {
    return "form-field";
  }

  static get properties() {}

  static get template() {
    return html` <div>letttsssggoo</div> `;
  }
}


customElements.define(FormField.is, FormField)

export default Form