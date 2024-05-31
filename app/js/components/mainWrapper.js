import { html } from "@polymer/polymer";
import "@polymer/polymer/lib/elements/dom-if.js";
import Base from "./base";
import "./aside.js";
import "./main.js";
import "./mainShow.js";

class Wrapper extends Base {
  static get is() {
    return "x-wrapper";
  }

  static get properties() {
    return {
      items: { type: Array, value: () => [] },
      selected_item_data: {
        type: Object,
        value: null,
        observer: "_selectedItemDataChanged",
      },
      current_route: { type: String, value: "show" },
    };
  }

  static get template() {
    return html`
      <x-aside
        class="aside"
        items="{{items}}"
        on-click="handleItemClick"
      ></x-aside>
      <x-main class="main"></x-main>
      <!-- <template is="dom-if" if="{{isShowRoute(current_route)}}">
        <template is="dom-if" if="{{selected_item_data}}">
          <x-main-show class="main" data="{{selected_item_data}}"></x-main-show>
        </template>
      </template>
      <template is="dom-if" if="{{isCreateRoute(current_route)}}">
        <x-main-create class="main"></x-main-create>
      </template> -->
      <button on-click="onClickAdd">добавить</button>
    `;
  }

  isShowRoute(route) {
    return route == "show";
  }

  isCreateRoute(route) {
    return route == "create";
  }

  onClickAdd(e) {
    this.set("current_route", "create");
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchData();
  }

  fetchData() {
    fetch("http://tablet-oi-staging.orion.web/dsf_api/calcs")
      .then((response) => response.json())
      .then((data) => {
        this.items = data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  handleItemClick(event) {
    fetch(
      `http://tablet-oi-staging.orion.web/dsf_api/calcs-configurations/${event.model.item.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.set("selected_item_data", data);
      })
      .catch((error) => {
        console.error("Error fetching item config:", error);
      });
  }
  _selectedItemDataChanged(newData, oldData) {
    this._selectedItemDataString = JSON.stringify(newData, null, 2); // Добавлено для отладки
  }
}

customElements.define(Wrapper.is, Wrapper);

export default Wrapper;
