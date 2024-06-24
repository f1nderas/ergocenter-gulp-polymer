class Api {
  static get current() {
    return new Api("http://zones-oi-staging.orion.web");
  }

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async getZones() {
    return this.doFetch("/dsf_api/calcs");
  }

  async getZrkZones() {
    const zones = await this.getZones();
    if (zones.error) return [zones];
    return zones.filter(
      (zone) => zone.type === "skbx.dsf.task.ams.destroyareas.grouptask"
    );
  }

  async getFormations() {
    return this.doFetch("/dao_api/dao/skbx.dao.formation");
  }

  async initializeFormations() {
    const storageKey = "filteredData";
    const cacheExpiryKey = "cacheExpiry";
    const cacheLifetime = 24 * 60 * 60 * 1000; //24 часа

    const cachedData = localStorage.getItem(storageKey);
    const cacheExpiry = localStorage.getItem(cacheExpiryKey);

    if (cachedData && cacheExpiry && new Date().getTime() < cacheExpiry) {
      return JSON.parse(cachedData);
    }

    const formationFull = await this.getFormations();
    const formation = formationFull.map((format) => ({
      id: format.id,
      name: format.command_post_name,
    }));

    localStorage.setItem(storageKey, JSON.stringify(formation));
    localStorage.setItem(cacheExpiry, new Date().getTime() + cacheLifetime);

    return formation;
  }

  async createCalculationTask(taskData) {
    return this.doPost("/dsf_api/calcs", taskData);
  }

  async updateCalculationTask(id, taskData) {
    return this.doPost(`/dsf_api/calcs/${id}`, taskData);
  }

  async deleteCalculationTask(id) {
    return this.doDelete(`/dsf_api/calcs/${id}`);
  }

  async getConfigZone(id) {
    return this.doFetch(`/dsf_api/calcs-configurations/${id}`);
  }

  async doFetch(path) {
    const response = await fetch(`${this.endpoint}${path}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  async doPost(path, data) {
    const response = await fetch(`${this.endpoint}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  async doDelete(path) {
    const response = await fetch(`${this.endpoint}${path}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
}

export default Api;
