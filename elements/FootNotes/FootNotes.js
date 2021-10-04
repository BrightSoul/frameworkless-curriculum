import template from './FootNotes.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class FootNotes extends BaseHTMLElement {
  constructor () {
    super(template);
    this.useIcons();
  }

  static get observedAttributes () {
    return ['image', 'period'];
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
      default:
        element.innerText = newValue;
        break;
    }
  }
}

registerElement('foot-notes', FootNotes);
export default FootNotes;
