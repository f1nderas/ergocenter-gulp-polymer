import Base from "./base";

class Zrk extends Base {
  static async load() {
    const collection_attrs = await this.adapter.getRtvZones();
    return this.build(collection_attrs);
  }

  static async findById(id) {
    const attrs = await this.adapter.getConfigZone(id);
    return new Zrk(attrs);
  }

  get defaultAttributes() {
    return {
      parameters: {
        detect_zone_params: {}
      },
      filter: {}
    }
  }

  async save() {
    this.create();
  }

  async create() {
    console.log(this);

    let response = await fetch('http://tablet-oi-staging.orion.web/dsf_api/calcs',{
      method: 'POST',
      headers: {},
      body: JSON.stringify({
        "name": this.name,
        "task": "skbx.dsf.task.radar.detectareas",
        "parameters": {
          "filter":{
            "duty_filter": this.parameters.filter,
            "readiness_filter": this.parameters.filter,
          },
            "formation": this.parameters,
            "max": this.parameters,
            "min": this.parameters,
            "radar": this.parameters,
            "step": this.parameters,
            "terrain_following": this.parameters,
            "build3D": this.parameters,
            "detect_zone_params": {
              "altitude": this.parameters.detect_zone_params,
              "azimuth_step": this.parameters.detect_zone_params,
              "distance_step": this.parameters.detect_zone_params,
              "mirror": this.parameters.detect_zone_params,
              "probability": this.parameters.detect_zone_params,
              "use_energy": this.parameters.detect_zone_params,
              "zoneSteps": this.parameters.detect_zone_params,
            },
        },
       })
    });
  }
}
export default Zrk;
