class TaskState {
  constructor() {
    this.task = {
      name: this.name,
      task: "skbx.dsf.task.radar.detectareas",
      parameters: {
        filter: {
          duty_filter: this.parameters.filter,
          readiness_filter: this.parameters.filter,
        },
        formation: this.parameters,
        max: this.parameters,
        min: this.parameters,
        radar: this.parameters,
        step: this.parameters,
        terrain_following: this.parameters,
        build3D: this.parameters,
        detect_zone_params: {
          altitude: this.parameters.detect_zone_params,
          azimuth_step: this.parameters.detect_zone_params,
          distance_step: this.parameters.detect_zone_params,
          mirror: this.parameters.detect_zone_params,
          probability: this.parameters.detect_zone_params,
          use_energy: this.parameters.detect_zone_params,
          zoneSteps: this.parameters.detect_zone_params,
        },
      },
    };
  }

  updateTask(key, value) {
    this.task[key] = value;
  }

  getTask() {
    return this.task;
  }

  resetTask() {
    this.task = {
      name: "",
      task: "skbx.dsf.task.radar.detectareas",
      parameters: {
        filter: {
          duty_filter: this.parameters.filter,
          readiness_filter: this.parameters.filter,
        },
        formation: this.parameters,
        max: this.parameters,
        min: this.parameters,
        radar: this.parameters,
        step: this.parameters,
        terrain_following: this.parameters,
        build3D: this.parameters,
        detect_zone_params: {
          altitude: this.parameters.detect_zone_params,
          azimuth_step: this.parameters.detect_zone_params,
          distance_step: this.parameters.detect_zone_params,
          mirror: this.parameters.detect_zone_params,
          probability: this.parameters.detect_zone_params,
          use_energy: this.parameters.detect_zone_params,
          zoneSteps: this.parameters.detect_zone_params,
        },
      },
    };
  }

}

export default TaskState