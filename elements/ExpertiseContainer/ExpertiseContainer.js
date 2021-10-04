import template from './ExpertiseContainer.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class ExpertiseContainer extends BaseHTMLElement {
  constructor () {
    super(template);
  }
}

registerElement('expertise-container', ExpertiseContainer);
export default ExpertiseContainer;
