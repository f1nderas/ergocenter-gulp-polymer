import { html } from "@polymer/polymer";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import Base from "./base";
import Api from "../lib/api";

const api = Api.current;
class AsideNav extends Base {
  static get is() {
    return "aside-nav";
  }

  static get properties() {
    return {
      items: {
        type: Array,
        value: () => [],
      },
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
            class="aside-item"
            data-id$="[[item.id]]"
            on-click="_handleItemClick"
          >
            [[item.name]]
          </div>
        </template>
      </div>
      <div class="aside-btn">
        <button class="btn btn-yellow" on-click="_handleAddButtonClick">
          Добавить
        </button>
      </div>
    `;
  }
  connectedCallback() {
    super.connectedCallback();
    this._fetchData();
  }

  async _fetchData() {
    try {
      const response = await api.getRtvZones();
      this.set("items", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  _handleItemClick = async (event) => {
    const itemId = event.currentTarget.dataset.id;

    const items = this.querySelectorAll(".aside-item");
    items.forEach((el) => el.classList.remove("active"));
    event.target.classList.add("active");


    this.dispatchEvent(new CustomEvent('item-selected', {
      detail: { id: itemId },
      bubbles: true,
      composed: true
    }));
  };
  _handleAddButtonClick() {
    this.dispatchEvent(
      new CustomEvent("add-item", {
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define(AsideNav.is, AsideNav);

export default AsideNav;
