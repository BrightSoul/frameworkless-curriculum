import template from './LanguageContent.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class LanguageContent extends BaseHTMLElement {
  constructor () {
    // Always call super first in constructor
    super(template);
    this.useIcons();
  }

  static get observedAttributes () {
    return ['language', 'listening', 'reading', 'interaction', 'production', 'writing'];
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

registerElement('language-content', LanguageContent);
export default LanguageContent;
