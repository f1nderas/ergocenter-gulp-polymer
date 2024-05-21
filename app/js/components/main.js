import { html } from '@polymer/polymer';
import Base from "./base";
import './form.js';

class Main extends Base {
  static get is() { return 'x-main' }

  static get template() {
    return html`
    <h2 class="main_h2-title">
      Задача - ЗРК: Зона огня подразделений и частей ЗРВ по направлениям
    </h2>
    <h3 class="main_h3-title"></h3>
    <h3>Создание задачи</h3>
    <x-form></x-form>
    `;
  }

}

customElements.define(Main.is, Main);

export default Main;


