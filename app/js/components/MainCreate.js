import { html } from "@polymer/polymer";
import Base from "./base";

class MainCreate extends Base {
  static get is() {
    return "main-create";
  }

  static get template() {
    return html`
      <h3 class="main_h3-title">Создание задачи</h3>
      <form class="task-form task-form-js">
        <div class="form-group form-group--textarea">
          <label for="task-name" class="form-label">Наименование</label>
          <textarea
            id="task-name"
            class="form-textarea task-name-js"
            placeholder="Наименование"
          ></textarea>
        </div>
        <div class="form-group custom-checkbox">
          <label for="account-duty-funds" class="form-label"
            >Учет дежурных средств</label
          >
          <input
            type="checkbox"
            id="account-duty-funds"
            class="form-checkbox"
          />
        </div>
        <div class="form-group custom-checkbox">
          <label for="account-combat-ready-funds" class="form-label"
            >Учет боеготовых средств</label
          >
          <input
            type="checkbox"
            id="account-combat-ready-funds"
            class="form-checkbox"
          />
        </div>
        <div class="form-group">
          <label for="formation" class="form-label">Формирование</label>
          <div class="custom-select">
            <select id="formation" class="form-select">
              <option value="option0">Не выбрано</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>
        <div class="form-group custom-checkbox">
          <label for="3d-calculation" class="form-label">Расчет в 3D</label>
          <input type="checkbox" id="3d-calculation" class="form-checkbox" />
        </div>
        <div class="form-group custom-checkbox">
          <label for="terrain-following-flight" class="form-label"
            >Полет с огибанием рельефа местности</label
          >
          <input
            type="checkbox"
            id="terrain-following-flight"
            class="form-checkbox"
          />
        </div>
        <div class="form-group">
          <label for="launch-height" class="form-label"
            >Высота пуска ракеты, м</label
          >
          <div class="input-container">
            <input
              type="number"
              id="launch-height"
              class="form-input"
              value="0"
            />
            <div class="arrow-up arrow-up-js"></div>
            <div class="arrow-down arrow-down-js"></div>
          </div>
        </div>
        <h4 class="subheading">Параметры цели</h4>
        <div class="form-group">
          <label for="target-height" class="form-label">Высота, м</label>
          <div class="input-container">
            <input
              type="number"
              id="target-height"
              class="form-input"
              value="250"
            />
            <div class="arrow-up arrow-up-js"></div>
            <div class="arrow-down arrow-down-js"></div>
          </div>
        </div>
        <h4 class="subheading">Параметры расчета зоны огня</h4>
        <div  class="toggle-section toggle-section-js">
          <div class="form-group">
            <label for="azimuth-step" class="form-label">Шаг по азимуту</label>
            <div class="input-container">
              <input
                type="number"
                id="azimuth-step"
                class="form-input"
                value="1.000"
                step="0.001"
              />
              <div class="arrow-up arrow-up-js"></div>
              <div class="arrow-down arrow-down-js"></div>
            </div>
          </div>
          <div class="form-group">
            <label for="step-size" class="form-label"
              >Размер шага от точки стояния, м</label
            >
            <div class="input-container">
              <input
                type="number"
                id="step-size"
                class="form-input"
                value="1000"
              />
              <div class="arrow-up arrow-up-js"></div>
              <div class="arrow-down arrow-down-js"></div>
            </div>
          </div>
        </div>
        <button type="button" class="toggle-button toggle-button-js">
          Больше параметров
        </button>
        <div class="form-group">
          <span class="spacer"></span>
          <button type="submit" class="form-button form-button-js btn-yellow">
            Отправить
          </button>
          <div class="error-message error-message-js"></div>
        </div>
      </form>
    `;
  }
}

customElements.define(MainCreate.is, MainCreate);

export default MainCreate;
