import template from './ContactBarItem.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class ContactBarItem extends BaseHTMLElement {
  constructor () {
    super(template);
    this.useIcons();
  }

  static get observedAttributes () {
    return ['icon'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    const element = this.shadowRoot.querySelector(`[data-${name}]`);
    if (!element) {
      return;
    }

    switch (name) {
      case 'icon':
        element.className = newValue;
        break;
    }
  }
}

registerElement('contact-bar-item', ContactBarItem);
export default ContactBarItem;
