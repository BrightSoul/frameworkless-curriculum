import template from './ContactBar.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class ContactBar extends BaseHTMLElement {
  constructor () {
    super(template);
  }
}

registerElement('contact-bar', ContactBar);
export default ContactBar;
