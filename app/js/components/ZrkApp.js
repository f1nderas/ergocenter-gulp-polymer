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
      },
      currentRoute: {
        type: String,
        value: null,
      },
    };
  }

  static get template() {
    return html`
      <aside-nav
        class="aside"
        on-item-selected="_handleItemSelected"
        on-add-item="_handleAddItem"
      ></aside-nav>
      <x-main
        class="main"
        selected-item-id="[[selectedItemId]]"
        current-route="[[currentRoute]]"
      ></x-main>
    `;
  }

  _handleItemSelected(event) {
    const itemId = event.detail.id;
    this.set('selectedItemId', itemId);
    this.set('currentRoute', 'show');
  }

  _handleAddItem() {
    this.set('currentRoute', 'create');
  }
}

customElements.define(ZrkApp.is, ZrkApp);

export default ZrkApp;
