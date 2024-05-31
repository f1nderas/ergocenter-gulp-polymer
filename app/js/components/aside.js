import { html } from "@polymer/polymer";
import "@polymer/polymer/lib/elements/dom-repeat.js";

import Base from "./base";

class Aside extends Base {
  static get is() {
    return "x-aside";
  }

  static get properties() {
    return {
      items: { type: Array, value: () => [] }
      //onItemClick: { type: Function },
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
        <template is="dom-repeat" items="{{items}}">
          <div
            class="aside-item"
            on-click="handleItemClick"
            data-id$="{{item.id}}"
          >
            {{item.name}}
          </div>
        </template>
      </div>
      <div class="aside-btn">
        <button class="btn btn-yellow">Добавить</button>
      </div>
    `;
  }

  handleItemClick(event) {
    // const itemId = event.currentTarget.dataset.id;
    // this.onItemClick(itemId);
  }
}

customElements.define(Aside.is, Aside);

export default Aside;
