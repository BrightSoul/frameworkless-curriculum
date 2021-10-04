import template from './CandidateInfo.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class CandidateInfo extends BaseHTMLElement {
  constructor () {
    super(template);
    this.useIcons();
  }

  static get observedAttributes () {
    return ['picture', 'name', 'role', 'birthday', 'location'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    const element = this.shadowRoot.querySelector(`[data-${name}]`);
    if (!element) {
      return;
    }

    switch (name) {
      case 'picture':
        element.src = newValue;
        break;
      default:
        element.innerText = newValue;
        break;
    }
  }
}

registerElement('candidate-info', CandidateInfo);
export default CandidateInfo;
