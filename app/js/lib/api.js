class Api {
  static get current() {
    return new Api("http://tablet-oi-staging.orion.web");
  }

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async getZones() {
    return this.doFetch("/dsf_api/calcs");
  }

  async getZrkZones() {
    const zones = await this.getZones();
    return zones.filter(
      (zone) => zone.type.includes("skbx.dsf.task.ams.destroyareas")
    );
  }

  async doFetch(path) {
    try {
      const response = await fetch(`${this.endpoint}${path}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Fetch error: ${error.message}`);
      throw error;
    }
  }

  async getConfigZone(id) {
    return this.doFetch(`/dsf_api/calcs-configurations/${id}`);
  }
}

export default Api;
