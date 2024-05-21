import {PolymerElement} from '@polymer/polymer';

class Base extends PolymerElement {
  constructor() {
    super();

    this.ignoreShadow = true;
  }

  _attachDom(dom) {
    this.ignoreShadow ? this.appendChild(dom) : super._attachDom(dom);
  }
};

export default Base;
