class Task {
  constructor() {
    this.task = {
      name: this.name,
      parameters: {
        build3D: false,
        destroy_area_params: {
          azimuth_step: null,
          distance_step: null,
          launch_altitude: null,
        },
        filter: {
          duty_filter: false,
          readiness_filter: false,
        },
        fly_object_altitude: null,
        formation: null,
        terrain_following: null,
      },
      task: "skbx.dsf.task.ams.destroyareas.grouptask",
    };
  }

}

export default Task;
