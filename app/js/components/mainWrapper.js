import { html } from "@polymer/polymer";
import "@polymer/polymer/lib/elements/dom-if.js";
import Base from "./base";
import "./aside.js";
import "./main.js";
import "./mainShow.js";
import Api from "../lib/api.js";

class Wrapper extends Base {
  static get is() {
    return "x-wrapper";
  }

  static get properties() {
    return {
      selected_item: { type: Object, value: null },
      current_action: { type: String, value: "show" },
      items: { type: Array, value: [] }
    };
  }

  static get template() {
    return html`
      <x-aside
        class="aside"
        items="[[items]]"
        on-item-click="clickOnItemList"
        on-new-item="onNewItem"
      ></x-aside>
      <x-main class="main"></x-main>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadItems();
  }

  async loadItems() {
    const items = await Api.current.getRtvZones();
    this.set('items', items);
  }
  clickOnItemList(event) {
    const item = event.detail.item;
    Api.current.getConfigZone(item.id).then((configItem) => {
      this.setProperties({
        selected_item: configItem,
        current_action: 'show'
      });
    });
  }

  onNewItem(event) {
    this.set('current_action', 'new');
  }

}

customElements.define(Wrapper.is, Wrapper);

export default Wrapper;
