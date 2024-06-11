import { html } from "@polymer/polymer";
import "@polymer/polymer/lib/elements/dom-if.js";
import Base from "./base.js";
import "./AsideNav.js";
import "./main.js";
import "./mainShow.js";
import Api from "../lib/api.js";

class ZrkApp extends Base {
  static get is() {
    return "zrk-app";
  }

  static get properties() {
    return {
      selectedItemId: {
        type: String,
        value: null,
      },
      selectedItem: {
        type: Object,
        value: null,
      },
      currentRoute: {
        type: String,
        value: "show",
      },
    };
  }

  static get template() {
    return html`
      <aside-nav
        class="aside"
        on-item-selected="_handleItemSelected"
        on-add-button-clicked="_handleAddButtonClick"
      ></aside-nav>
      <x-main
        class="main"
        selected-item-id="[[selectedItemId]]"
        selected-item="[[selectedItem]]"
        current_route="[[currentRoute]]"
      ></x-main>
    `;
  }

  _handleItemSelected = (event) => {
    const { id, item } = event.detail;
    this.setProperties({
      selectedItemId: id,
      selectedItem: item,
      currentRoute: "show",
    });
  };

  _handleAddButtonClick() {
    this.set("currentRoute", "create");
  }
}

customElements.define(ZrkApp.is, ZrkApp);

export default ZrkApp;
