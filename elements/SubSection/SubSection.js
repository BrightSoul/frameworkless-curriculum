import template from './SubSection.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class SubSection extends BaseHTMLElement {
  constructor () {
    super(template);
  }

  static get observedAttributes () {
    return ['title', 'subtitle'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    const element = this.shadowRoot.querySelector(`[data-${name}]`);
    if (!element) {
      return;
    }

    switch (name) {
      case 'title':
        element.innerText = newValue;
        break;
    }
  }
}

registerElement('sub-section', SubSection);
export default SubSection;
