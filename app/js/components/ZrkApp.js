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
      items: {
        type: Array,
        value: () => [],
      },
      selectedItemId: {
        type: String,
      },
      currentRoute: {
        type: String,
      },
    };
  }

  static get template() {
    return html`
      <aside-nav
        class="aside"
        items="{{items}}"
        on-add-item="_handleAddItem"
        on-selected-item="_handleItemSelected"
      ></aside-nav>
      <x-main
        class="main"
        selected-item-id="[[selectedItemId]]"
        current-route="[[currentRoute]]"
        on-edit-item="_handleEditItem"
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
  _handleEditItem() {
    this.currentRoute = "edit";
  }
}

customElements.define(ZrkApp.is, ZrkApp);

export default ZrkApp;
