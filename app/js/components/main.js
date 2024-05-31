import { html } from "@polymer/polymer";
import Base from "./base.js";
import "./mainContent.js";

class Main extends Base {
  static get is() {
    return "x-main";
  }

  static get properties() {
    return {
      current_route: { type: String, value: "create" },
    };
  }

  static get template() {
    return html`
      <div class="main_title main-container">
        <div class="main_title-h2">
          Задача - ЗРК: Зона огня подразделений и частей ЗРВ по направлениям
        </div>
      </div>
      <template is="dom-if" if="{{isShowRoute(current_route)}}">
        <template is="dom-if" if="{{selected_item_data}}">
          <x-main-show class="main" data="{{selected_item_data}}"></x-main-show>
        </template>
      </template>
      <template is="dom-if" if="{{isCreateRoute(current_route)}}">
        <x-main-content class="main-container"></x-main-content>
      </template>
    `;
  }

  isShowRoute(route) {
    return route == "show";
  }

  isCreateRoute(route) {
    return route == "create";
  }
}

customElements.define(Main.is, Main);

export default Main;
