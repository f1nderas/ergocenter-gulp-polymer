import { html } from "@polymer/polymer";
import Base from "./_base.js";
import Api from "../entities/api";

const api = Api.current;

class FormField extends Base {
  static get is() {
    return "form-field";
  }

  static get properties() {
    return {
      taskState: {
        type: Object,
        value: () => ({
          taskName: "",
          accountDutyFunds: false,
          accountCombatReadyFunds: false,
          options: [],
          calculation3D: false,
          terrainFollowingFlight: false,
          launchHeight: 0,
          targetHeight: 250,
          azimuthStep: 1,
          stepSize: 1000,
        }),
      },
    };
  }

  static get template() {
    console.log(44);
    return html`
      <form-textarea
        id-property="task-name"
        label="Наименование"
        placeholder="Наименование"
        value="{{taskState.taskName}}"
      ></form-textarea>
      <form-checkbox
        id-property="account-duty-funds"
        label="Учет дежурных средств"
        checked="{{taskState.accountDutyFunds}}"
      ></form-checkbox>
      <form-checkbox
        id-property="account-combat-ready-funds"
        label="Учет боеготовых средств"
        checked="{{taskState.accountCombatReadyFunds}}"
      ></form-checkbox>
      <div class="form-group">
        <label for="formation" class="form-label">Формирование</label>
        <div class="custom-select">
          <select id="formation" class="form-select" name="formation">
            <option value="option0">Не выбрано</option>
            <template is="dom-repeat" items="{{taskState.options}}">
              <option value="[[item.id]]">[[item.name]]</option>
            </template>
          </select>
        </div>
      </div>
      <form-checkbox
        id-property="3d-calculation"
        label="Расчет в 3D"
        checked="{{taskState.calculation3D}}"
      ></form-checkbox>
      <form-checkbox
        id-property="terrain-following-flight"
        label="Полет с огибанием рельефа местности"
        checked="{{taskState.terrainFollowingFlight}}"
      ></form-checkbox>
      <form-number
        id-property="launch-height"
        label="Высота пуска ракеты, м"
        value="{{taskState.launchHeight}}"
      ></form-number>
      <h4 class="subheading">Параметры цели</h4>
      <form-number
        id-property="target-height"
        label="Высота, м"
        value="{{taskState.targetHeight}}"
      ></form-number>
      <h4 class="subheading">Параметры расчета зоны огня</h4>
      <div class="toggle-section toggle-section-js">
        <form-number
          id-property="azimuth-step"
          label="Шаг по азимуту"
          value="{{taskState.azimuthStep}}"
          step="0.001"
        ></form-number>
        <form-number
          id-property="step-size"
          label="Размер шага от точки стояния, м"
          value="{{taskState.stepSize}}"
        ></form-number>
      </div>
      <button type="button" class="toggle-button toggle-button-js" on-click='logInfo'>
        Больше параметров
      </button>
    `;
  }

  connectedCallback() {
    console.log(1);
    super.connectedCallback();
    api.initializeFormations().then((data) => {
      this.set("taskState.options", data);
    });
    console.log(3);
  }

  logInfo(){
    console.log(this.taskState);
  }
}

customElements.define(FormField.is, FormField);

export default FormField;
