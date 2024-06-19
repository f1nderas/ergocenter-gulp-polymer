import { html } from "@polymer/polymer";
import "@polymer/polymer/lib/elements/dom-repeat.js";
import Base from "./_base.js";
import Api from "../entities/api";

const api = Api.current;
class AsideNav extends Base {
  static get is() {
    return "aside-nav";
  }

  static get properties() {
    console.dir(this);
    return {
      items: {
        type: Array,
        value: () => [],
      },
      searchQuery: {
        type: String,
        value: "",
      },
      errorResponse: {
        type: String,
        value: null,
      },
    };
  }

  static get template() {
    return html`
      <div class="aside-search">
        <button class="div_btn btn">
          <img src="../images/search-input.png" alt="" />
        </button>
        <input
          type="text"
          value="{{searchQuery::input}}"
          class="div_input"
          placeholder="Поиск"
        />
      </div>
      <div class="aside-list">
        <template
          is="dom-repeat"
          items="[[_filteredItems(searchQuery, items)]]"
          if="[[!isNotResponse(items)]]"
        >
          <div
            class="aside-item"
            data-id$="[[item.id]]"
            on-click="_handleItemClick"
          >
            [[item.name]]
          </div>
        </template>
        <template is="dom-if" if="[[isNotResponse(items)]]">
          [[errorResponse]]
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
      const response = await api.getZrkZones();
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

    this.dispatchEvent(
      new CustomEvent("selected-item", {
        detail: { id: itemId },
        bubbles: true,
        composed: true,
      })
    );
  };
  _handleAddButtonClick() {
    this.dispatchEvent(
      new CustomEvent("add-item", {
        bubbles: true,
        composed: true,
      })
    );
  }

  _filteredItems(query, items) {
    if (!query) {
      return items;
    }
    return items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  isNotResponse(array) {
    if (array[0]?.error) {
      this.set("errorResponse", 'Ошибка: '+array[0].error);
      return "error" in array[0];
    }
    return false;
  }
}

customElements.define(AsideNav.is, AsideNav);

export default AsideNav;
