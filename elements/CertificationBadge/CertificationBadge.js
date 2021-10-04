import template from './CertificationBadge.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class CertificationBadge extends BaseHTMLElement {
  constructor () {
    super(template);
  }

  static get observedAttributes () {
    return ['image', 'link'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    const element = this.shadowRoot.querySelector(`[data-${name}]`);
    if (!element) {
      return;
    }

    switch (name) {
      case 'image':
        element.src = newValue;
        break;
      case 'link':
        element.href = newValue;
        break;
    }
  }
}

registerElement('certification-badge', CertificationBadge);
export default CertificationBadge;
