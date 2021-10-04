/**
 * @param {string} elementName
 * @param {function} prototype
 */
export function registerElement (elementName, prototype) {
  window.customElements.define(elementName, prototype);
}

export class BaseHTMLElement extends HTMLElement {
  /**
   * @param {string} template
   */
  constructor (template) {
    super();
    const templateElement = document.createElement('template');
    templateElement.innerHTML = template;
    const clonedElement = templateElement.content.cloneNode(true);
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(clonedElement);
  }

  useIcons () {
    const styleSheet = this.ownerDocument.head.querySelector('link[data-icons]').cloneNode();
    this.shadowRoot.appendChild(styleSheet);
  }
}
