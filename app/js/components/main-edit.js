import { html } from "@polymer/polymer";
import Base from "./_base.js";

class MainEdit extends Base {
  static get is() {
    return "main-edit";
  }

  static get properties() {
    return {
      data: { type: Object },
      value: () => ({}),
    };
  }

  static get template() {
    return html`
      <h3 class="main_h3-title">Редактирование задачи</h3>
      <form class="task-form task-form-js">
        <form-textarea
          id-property="task-name"
          label="Наименование"
          placeholder="Наименование"
          value="{{data.name}}"
        ></form-textarea>
        <form-checkbox
          id-property="account-duty-funds"
          label="Учет дежурных средств"
          checked="{{data.parameters.filter.duty_filter::change}}"
        ></form-checkbox>
        <form-checkbox
          id-property="account-combat-ready-funds"
          label="Учет боеготовых средств"
          checked="{{data.parameters.filter.readiness_filter::change}}"
        ></form-checkbox>
        <div class="form-group">
          <label for="formation" class="form-label">Формирование</label>
          <div class="custom-select">
            <select id="formation" class="form-select">
              <option
                value="option0"
                selected$="{{!data.parameters.formation}}"
              >
                Не выбрано
              </option>
              <option
                value="option1"
                selected$="{{data.parameters.formation == 'option1'}}"
              >
                Option 1
              </option>
              <option
                value="option2"
                selected$="{{data.parameters.formation == 'option2'}}"
              >
                Option 2
              </option>
            </select>
          </div>
        </div>
        <form-checkbox
          id-property="3d-calculation"
          label="Расчет в 3D"
          checked="{{data.parameters.build3D::change}}"
        ></form-checkbox>
        <form-checkbox
          id-property="terrain-following-flight"
          label="Полет с огибанием рельефа местности"
          checked="{{data.parameters.terrain_following::change}}"
        ></form-checkbox>
        <form-number
          id="launch-height"
          label="Высота пуска ракеты, м"
          value="{{data.parameters.destroy_area_params.launch_altitude}}"
        ></form-number>
        <h4 class="subheading">Параметры цели</h4>
        <form-number
          id="target-height"
          label="Высота, м"
          value="{{data.parameters.fly_object_altitude}}"
        ></form-number>
        <h4 class="subheading">Параметры расчета зоны огня</h4>
        <div class="toggle-section toggle-section-js">
          <form-number
            id="azimuth-step"
            label="Шаг по азимуту"
            value="{{data.parameters.destroy_area_params.azimuth_step}}"
            step="0.001"
          ></form-number>
          <form-number
            id="step-size"
            label="Размер шага от точки стояния, м"
            value="{{data.parameters.destroy_area_params.distance_step}}"
          ></form-number>
        </div>
        <button type="button" class="toggle-button toggle-button-js">
          Больше параметров
        </button>
        <div class="form-group">
          <span class="spacer"></span>
          <button type="submit" class="form-button form-button-js btn-yellow">
            Сохранить
          </button>
          <div class="error-message error-message-js"></div>
        </div>
      </form>
    `;
  }
}

customElements.define(MainEdit.is, MainEdit);

export default MainEdit;
