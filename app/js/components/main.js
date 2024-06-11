import { html } from "@polymer/polymer";
import Base from "./base.js";
import "./mainContent.js";
import "./mainShow.js";
import Api from "../lib/api.js";
import { ToggleSection, AutoResizeTextarea, NumberInputArrows, FormValidator } from "../lib/event.js";
const api = Api.current;

class Main extends Base {
  static get is() {
    return "x-main";
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
        observer: "_routeChanged"
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
          <main-show class="main-container" data="[[selectedItem]]"></x-main-show>
        </template>
      </template>
      <template is="dom-if" if="{{isCreateRoute(currentRoute)}}">
        <main-content class="main-container" on-dom-changed="_initializeClasses"></main-content>
      </template>
    `;
  }

  async _selectedItemChanged(newItemId) {
    if (newItemId) {
      console.log("Selected item ID changed:", newItemId);
      try {
        const item = await api.getConfigZone(newItemId);
        this.set('selectedItem', item);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    }
  }

  _routeChanged(newRoute) {
    if (newRoute === 'create') {
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
}

customElements.define(Main.is, Main);

export default Main;
