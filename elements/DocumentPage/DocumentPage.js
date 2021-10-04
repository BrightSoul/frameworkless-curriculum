import template from './DocumentPage.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class DocumentPage extends BaseHTMLElement {
  constructor () {
    super(template);
  }
}

registerElement('document-page', DocumentPage);
export default DocumentPage;
