import template from './TechTags.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class TechTags extends BaseHTMLElement {
  constructor () {
    super(template);
    this.useIcons();
  }
}

registerElement('tech-tags', TechTags);
export default TechTags;
