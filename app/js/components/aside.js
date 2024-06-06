import { html } from "@polymer/polymer";
import "@polymer/polymer/lib/elements/dom-repeat.js";

import Base from "./base";
import Api from "../lib/api";

class Aside extends Base {
  static get is() {
    return "x-aside";
  }

  static get properties() {
    return {
      items: { type: Array, value: [] },
      current_item: { type: Object, value: null },
    };
  }

  static get template() {
    return html`
      <div class="aside-search">
        <button class="div_btn btn">
          <img src="../images/search-input.png" alt="" />
        </button>
        <input type="text" class="div_input" placeholder="Поиск" />
      </div>
      <div class="aside-list">
        <template is="dom-repeat" as="item" items="[[items]]">
          <div
            class$="aside-item [[getActive(item)]]"
            on-click="handleItemClick"
            data-id$="[[item.id]]"
          >
            [[item.name]]
          </div>
        </template>
      </div>
      <div class="aside-btn">
        <button class="btn btn-yellow">Добавить</button>
      </div>
    `;
  }


  handleItemClick(event) {
    this.set("current_item", event.model.item);
    const customEvent = new CustomEvent("item-click", {
      detail: { item: event.model.item },
      composed: true,
    });
    this.dispatchEvent(customEvent);
  }

  createNewItem(event) {
    const customEvent = new CustomEvent("new-item", {
      composed: true,
    });
    this.dispatchEvent(customEvent);
  }

  getActive(item) {
    return this.current_item?.id == item.id ? "active" : "";
  }
}

customElements.define(Aside.is, Aside);

export default Aside;
