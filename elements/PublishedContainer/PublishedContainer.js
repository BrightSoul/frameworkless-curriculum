import template from './PublishedContainer.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class PublishedContainer extends BaseHTMLElement {
  constructor () {
    super(template);
  }
}

registerElement('published-container', PublishedContainer);
export default PublishedContainer;
