import template from './LanguageContainer.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class LanguageContainer extends BaseHTMLElement {
  constructor () {
    super(template);
  }
}

registerElement('language-container', LanguageContainer);
export default LanguageContainer;
