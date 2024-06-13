import { html } from "@polymer/polymer";
import Base from "./base";

class MainShow extends Base {
  static get is() {
    return "main-show";
  }

  static get properties() {
    return {
      data: { type: Object },
    };
  }

  static get template() {
    return html`
      <template is="dom-if" if="[[!isBlank(data)]]">
        <div class="section">
          <div class="section-header">[[data.name]]</div>
          <div>Учет дежурных средств: [[getDuty(data)]]</div>
          <div>Учет боеготовых средств: [[getCombat(data)]]</div>
          <div>Формирование: [[getFormation(data)]]</div>
          <div>Расчет в 3D: [[get3dValue(data)]]</div>
          <div>
            Полет с огибанием рельефа местности: [[getTerrain_following(data)]]
          </div>
          <div>Высота пуска ракеты, м: [[getLaunch_altitude(data)]]</div>
        </div>
        <div class="section">
          <div class="section-header">Параметры цели</div>
          <div>Высота, м: [[getFly_object_altitude(data)]]</div>
          <div>Шаг по азимуту: [[getAzimuth_step(data)]]</div>
          <div>Размер шага от точки стояния, м: [[getDistance_step(data)]]</div>
        </div>
        <div class="section">
          <div class="section-header">Геометрические объекты</div>
          <div>
            Точка стояния ЗРПК "Панцирь-С" (96Кб) №2137 ([[getFormation(data)]])
          </div>
          <div>Зона огня ЗУР МД(95Я6) для типа цели: аэродинамическая</div>
          <div class="map">[Карта]</div>
        </div>
      </template>
    `;
  }

  getDuty(item) {
    console.log(item);
    return item?.parameters?.filter?.duty_filter ? "да" : "нет";
  }

  getCombat(item) {
    return item?.parameters?.filter?.readiness_filter ? "да" : "нет";
  }

  getFormation(item) {
    return item?.parameters?.formation;
  }

  get3dValue(item) {
    return item?.parameters?.build3D ? "да" : "нет";
  }

  getTerrain_following(item) {
    return item?.parameters?.terrain_following ? "да" : "нет";
  }

  getLaunch_altitude(item) {
    return item?.parameters?.destroy_area_params?.launch_altitude ?? 0;
  }

  getFly_object_altitude(item) {
    return item?.parameters?.fly_object_altitude ?? 0;
  }

  getAzimuth_step(item) {
    return item?.parameters?.detect_zone_params?.azimuth_step ?? 1.0;
  }

  getDistance_step(item) {
    return item?.parameters?.detect_zone_params?.distance_step ?? 1000;
  }

  isBlank(val) {
    return val == null;
  }
}

customElements.define(MainShow.is, MainShow);

export default MainShow;
