import { html } from "@polymer/polymer";
import Base from "./base";

class MainShow extends Base {
  static get is() {
    return "x-main-show";
  }

  static get properties() {
    return {
      data: { type: Object }
    };
  }

  static get template() {
    return html`
      <div class="display">
        <h3>Item Details</h3>
        <pre>{{dataString}}</pre>
      </div>
    `;
  }

  static get observers() {
    return ["_dataChanged(data.*)"];
  }

  _dataChanged(data) {
    if (this.data) {
      this.dataString = JSON.stringify(this.data, null, 2);
    } else {
      this.dataString = "No data available";
    }
  }
}

customElements.define(MainShow.is, MainShow);

export default MainShow;
