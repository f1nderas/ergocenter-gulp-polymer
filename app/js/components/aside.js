import { html } from '@polymer/polymer';

import Base from "./base";

class Aside extends Base {
  static get is() { return 'x-aside' }

  static get properties() {
    return {
      value: { type: Number, value: 0 }
    }
  }

  static get template() {
    return html`
    <input type="text" class="aside-input" />
    <div class="aside-list">
      <div class="aside-item">Зона огня, П-17 зрбатр, 250м</div>
      <div class="aside-item">Зона огня, П-17 зрбатр, 270м</div>
    </div>
    <button class="aside-btn btn btn-yellow">Добавить</button>
    `;
  }

}

customElements.define(Aside.is, Aside);

export default Aside;
