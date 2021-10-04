import template from './JobPosition.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class JobPosition extends BaseHTMLElement {
  constructor () {
    super(template);
    this.useIcons();
  }

  static get observedAttributes () {
    return ['employer', 'area', 'period', 'position'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    const element = this.shadowRoot.querySelector(`[data-${name}]`);
    if (!element) {
      return;
    }

    switch (name) {
      default:
        element.innerText = newValue;
        break;
    }
  }
}

registerElement('job-position', JobPosition);
export default JobPosition;
