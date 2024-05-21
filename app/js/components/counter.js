import { html } from '@polymer/polymer';

import Base from "./base";

class Counter extends Base {
  static get is() { return 'x-counter' }

  static get properties() {
    return {
      value: { type: Number, value: 0 }
    }
  }

  static get template() {
    return html`
      <div>
        <h2>Счетчик [[value]]</h2>
        <button on-click="plus">Plus</button>
        <button on-click="minus">Minus</button>
      </div>
    `;
  }

  plus() {
    this.set('value', this.value + 1);
  }

  minus() {
    this.set('value', this.value - 1);
  }
}

customElements.define(Counter.is, Counter);

export default Counter;
