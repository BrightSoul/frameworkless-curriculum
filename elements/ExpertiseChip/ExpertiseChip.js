import template from './ExpertiseChip.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class ExpertiseChip extends BaseHTMLElement {
  constructor () {
    super(template);
  }
}

registerElement('expertise-chip', ExpertiseChip);
export default ExpertiseChip;
