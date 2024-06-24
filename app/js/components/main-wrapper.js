import { html } from "@polymer/polymer";
import Base from "./_base.js";
import "../layout/create-page.js";
import "../layout/show-page.js";
import "../layout/edit-page.js";
import Api from "../entities/api.js";
import {
  ToggleSection,
  AutoResizeTextarea,
  NumberInputArrows,
  FormValidator,
} from "../entities/event.js";
const api = Api.current;

class MainWrapper extends Base {
  static get is() {
    return "main-wrapper";
  }

  static get properties() {
    return {
      selectedItemId: {
        type: String,
        observer: "_selectedItemChanged",
      },
      selectedItem: {
        type: Object,
      },
      currentRoute: {
        type: String,
        value: null,
        observer: "_routeChanged",
      },
    };
  }

  static get template() {
    return html`
      <div class="main_title main-container">
        <div class="main_title-h2">
          Задача - ЗРК: Зона огня подразделений и частей ЗРВ по направлениям
        </div>
      </div>

      <template is="dom-if" if="{{isShowRoute(currentRoute)}}">
        <template is="dom-if" if="[[selectedItem]]">
          <show-page class="main-container" data="[[selectedItem]]"></show-page>
        </template>
      </template>
      <template is="dom-if" if="{{isCreateRoute(currentRoute)}}">
        <create-page class="main-container" on-dom-changed="_initializeClasses"></create-page>
      </template>
      <template is="dom-if" if="{{isEditRoute(currentRoute)}}">
        <edit-page class="main-container" data="[[selectedItem]]"></edit-page>
      </template>
      <template is="dom-if" if="[[isBlank(currentRoute)]]">
      <div class='no_selected' >Зона не выбрана</div>
      </template>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadFormations();
  }

  async _loadFormations() {
    try {
      const formations = JSON.parse(localStorage.getItem("filteredData")) || [];
      console.log(formations);
    } catch (error) {
      console.error("Error initioalizing formations:", error);
    }
  }

  async _selectedItemChanged(newItemId) {
    if (newItemId) {
      console.log("Selected item ID changed:", newItemId);
      try {
        const item = await api.getConfigZone(newItemId);
        this.set("selectedItem", item);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    }
  }

  _routeChanged(newRoute) {
    if (newRoute === "create" || newRoute === "edit") {
      this._initializeClasses();
    }
  }

  _initializeClasses() {
    setTimeout(() => {
      new ToggleSection("toggle-button-js", "toggle-section-js");
      new AutoResizeTextarea("task-name-js");
      new NumberInputArrows("arrow-up-js", "arrow-down-js");
      new FormValidator("task-form-js", "form-button-js", "error-message-js");
    }, 0);
  }

  isShowRoute(route) {
    return route === "show";
  }

  isCreateRoute(route) {
    return route === "create";
  }

  isEditRoute(route) {
    return route === "edit";
  }

  isBlank(route) {
    return route == null;
  }
}

customElements.define(MainWrapper.is, MainWrapper);

export default MainWrapper;
