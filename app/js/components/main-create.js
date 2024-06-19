import { html } from "@polymer/polymer";
import Base from "./_base.js";
import "./UI/form-textarea.js";
import "./UI/form-checkbox.js";
import "./UI/form-number.js";


class MainCreate extends Base {
  static get is() {
    return "main-create";
  }

  static get properties() {
    return {
      taskName: {
        type: String,
        value: "asd",
      },
      accountDutyFunds: {
        type: Boolean,
        value: false,
      },
      accountCombatReadyFunds: {
        type: Boolean,
        value: false,
      },
      calculation3D: {
        type: Boolean,
        value: false,
      },
      terrainFollowingFlight: {
        type: Boolean,
        value: false,
      },
      launchHeight: {
        type: Number,
        value: 0,
      },
      targetHeight: {
        type: Number,
        value: 250,
      },
      azimuthStep: {
        type: Number,
        value: 1,
      },
      stepSize: {
        type: Number,
        value: 1000,
      },
    };
  }

  static get template() {
    return html`
    <div>[[taskName]]</div>

      <h3 class="main_h3-title">Создание задачи</h3>
      <form class="task-form task-form-js">
        <form-textarea
          id-property="task-name"
          label="Наименование"
          placeholder="Наименование"
          value="{{taskName}}"
        ></form-textarea>
        <form-checkbox
          id-property="account-duty-funds"
          label="Учет дежурных средств"
          checked="{{accountDutyFunds}}"
        ></form-checkbox>
        <form-checkbox
          id-property="account-combat-ready-funds"
          label="Учет боеготовых средств"
          checked="{{accountCombatReadyFunds}}"
        ></form-checkbox>
        <div class="form-group">
          <label for="formation" class="form-label">Формирование</label>
          <div class="custom-select">
            <select id="formation" class="form-select" name="formation">
              <option value="option0">Не выбрано</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
        </div>
        <form-checkbox
          id-property="3d-calculation"
          label="Расчет в 3D"
          checked="{{calculation3D}}"
        ></form-checkbox>
        <form-checkbox
          id-property="terrain-following-flight"
          label="Полет с огибанием рельефа местности"
          checked="{{terrainFollowingFlight}}"
        ></form-checkbox>
        <form-number
          id-property="launch-height"
          label="Высота пуска ракеты, м"
          value="{{launchHeight}}"
        ></form-number>
        <h4 class="subheading">Параметры цели</h4>
        <form-number
          id-property="target-height"
          label="Высота, м"
          value="{{targetHeight}}"
        ></form-number>
        <h4 class="subheading">Параметры расчета зоны огня</h4>
        <div class="toggle-section toggle-section-js">
          <form-number
            id-property="azimuth-step"
            label="Шаг по азимуту"
            value="{{azimuthStep}}"
            step="0.001"
          ></form-number>
          <form-number
            id-property="step-size"
            label="Размер шага от точки стояния, м"
            value="{{stepSize}}"
          ></form-number>
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
