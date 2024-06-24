import { html } from "@polymer/polymer";
import Base from "../components/_base.js";
import '../components/form-field.js'



class CreatePage extends Base {
  static get is() {
    return "create-page";
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
    console.log(12);
    return html`
      <div>[[taskName]]</div>

      <h3 class="main_h3-title">Создание задачи</h3>
      <form class="task-form task-form-js">
        <form-field></form-field>
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

customElements.define(CreatePage.is, CreatePage);

export default CreatePage;
