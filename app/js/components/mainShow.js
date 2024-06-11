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
      <div class="detection_item">

        <h3 class="subheading">[[data.name]]</h3>
        <div class="button_edit">
          <button class="edit">Редактировать</button>
        </div>
        <p><span>Учет дежурных средств: [[getEquipment(data)]]</span></p>
        <p><span>Учет боеготовных средств: [[getCombat(data)]]<span></p>
        <p><span>Формирование: [[getFormation(data)]]</span></p>
        <p><span>ЗРК: [[getRradar(data)]]</span></p>
        <p><span>Расчет в 3D: [[get3dValue(data)]]</span></p>
        <p><span>Полет с огибанием рельефа местности: [[getTerrain_following(data)]]</span></p>
      </div>
      <div class="main_calculation_parameters">
        <h3 class="subheading">Параметры расчета РЛП</h3>
        <p>Высота цели, м: [[getAltitude(data)]]</p>
        <p>Вероятность обнаружения: [[getProbability(data)]]</p>
        <p>ЭОП, м2: [[getMirror(data)]]</p>
        <p>Шаг по азимуту: [[getAzimuth_step(data)]]</p>
        <p>Размер шага от точки стояния, м: [[getDistance_step(data)]]</p>
        <p>Использование энергетической дальности обнаружения: [[getEnergy(data)]]</p>
      </div>
      <div class="geometric_objects">
        <h3 class="subheading">Геометрические объекты</h3>
        <p>Реализуемая зона обнаружения ДМРЛ-С №62 (ПУ 1 ДМРЛ-С)</p>
        <p>Точка стояния РЛС ДМРЛ-С №62 (ПУ 1 ДМРЛ-С)</p>
      </div>
    </template>

    `;
  }

  getEquipment(item) {
    console.log(item);
    return item?.parameters?.filter?.duty_filter ? "да" : "нет";
  }

  getCombat(item) {
    return item?.parameters?.filter?.readiness_filter ? "да" : "нет";
  }

  getFormation(item) {
    return item?.parameters?.formation;
  }

  getRradar(item) {
    return item?.parameters?.ams;
  }

  get3dValue(item) {
    return item?.parameters?.build3D ? "да" : "нет";
  }

  getTerrain_following(item) {
    return item?.parameters?.terrain_following ? "да" : "нет";
    }

  getAltitude(item) {
    return item?.parameters?.detect_zone_params?.altitude;
  }

  getProbability(item) {
    return item?.parameters?.detect_zone_params?.probability;
  }

  getMirror(item) {
    return item?.parameters?.detect_zone_params?.mirror;
  }

  getAzimuth_step(item) {
    return item?.parameters?.detect_zone_params?.azimuth_step;
  }

  getDistance_step(item) {
    return item?.parameters?.detect_zone_params?.distance_step;
  }

  getEnergy(item) {
    return item?.parameters?.detect_zone_params?.use_energy ? "да" : "нет";
  }

  isBlank(val) {
    return val == null;
  }

}

customElements.define(MainShow.is, MainShow);

export default MainShow;
