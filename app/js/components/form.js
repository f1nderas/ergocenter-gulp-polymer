import { html } from '@polymer/polymer';
import Base from "./base";

class Form extends Base {
  static get is() { return 'x-form'; }

  static get template() {
    return html`
      <form>
        <div class="form-group">
          <label for="task-name">Наименование</label>
          <textarea id="task-name" rows="4"></textarea>
        </div>
        <div class="form-group">
          <label for="account-duty-funds">Учет дежурных средств</label>
          <input type="checkbox" id="account-duty-funds" />
        </div>
        <div class="form-group">
          <label for="account-combat-ready-funds">Учет боеготовых средств</label>
          <input type="checkbox" id="account-combat-ready-funds" />
        </div>
        <div class="form-group">
          <label for="formation">Формирование</label>
          <select id="formation">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div class="form-group">
          <label for="zrk">ЗРК</label>
          <select id="zrk">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div class="form-group">
          <label for="3d-calculation">Расчет в 3D</label>
          <input type="checkbox" id="3d-calculation" />
        </div>
        <div class="form-group">
          <label for="terrain-following-flight">Полет с огибанием рельефа местности</label>
          <input type="checkbox" id="terrain-following-flight" />
        </div>
        <div class="form-group">
          <label for="launch-height">Высота пуска ракеты, м</label>
          <input type="text" id="launch-height" />
        </div>
        <h4>Параметры и цели</h4>
        <div class="form-group">
          <label for="target-height">Высота, м</label>
          <input type="text" id="target-height" />
        </div>
        <h4>Параметры расчета зоны огня</h4>
        <div id="toggle-button" class="toggle-button">Больше параметров</div>
        <div id="toggle-section" class="toggle-section">
          <div class="form-group">
            <label for="azimuth-step">Шаг по азимуту</label>
            <input type="text" id="azimuth-step" />
          </div>
          <div class="form-group">
            <label for="step-size">Размер шага от точки стояния, м</label>
            <input type="text" id="step-size" />
          </div>
        </div>
        <button type="submit">Отправить</button>
      </form>
    `;
  }
}

customElements.define(Form.is, Form);

export default Form;
