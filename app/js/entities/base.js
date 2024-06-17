import Api from "./api";

class Base {
  static get adapter() {
    return Api.current;
  }

  static build(collection_attrs) {
    return collection_attrs.map((attrs) => {
      return new this(attrs);
    });
  }

  constructor(params = {}) {
    const extParams = { ...this.defaultAttributes, ...params };
    this._attrs = Object.keys(extParams);

    this._attrs.forEach((attr) => {
      this[attr] = extParams[attr];
    });

    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  touch() {
    this.updatedAt = new Date();
  }

  asObject(options = {}) {
    let params = {};

    this._attrs.forEach((attr) => {
      params[attr] = this[attr];
    });

    const exceptedAttrs = options.except || [];
    exceptedAttrs.forEach((attr) => {
      delete params[attr];
    });

    return params;
  }

  clone() {
    return new this.constructor(this.asObject());
  }

  assign_attributes(attrs) {
    Object.keys(attrs).forEach((attr) => {
      this[attr] = attrs[attr];
    });
  }

  get defaultAttributes() {
    return {};
  }
}

export default Base;
