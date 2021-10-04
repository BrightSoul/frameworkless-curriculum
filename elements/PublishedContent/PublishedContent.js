import template from './PublishedContent.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class PublishedContent extends BaseHTMLElement {
  constructor () {
    // Always call super first in constructor
    super(template);
    this.useIcons();
  }

  static get observedAttributes () {
    return ['image', 'link', 'title', 'rating', 'publisher', 'period'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    const element = this.shadowRoot.querySelector(`[data-${name}]`);
    if (!element) {
      return;
    }

    switch (name) {
      case 'image':
        element.src = newValue;
        break;
      case 'link':
        element.href = newValue;
        break;
      case 'rating':
        element.innerHTML = generateRating(parseFloat(newValue));
        this.shadowRoot.querySelector(`[data-${name}-value]`).innerText = newValue;
        break;
      default:
        element.innerText = newValue;
        break;
    }
  }
}

/**
 * @param {number} value
 * @returns {string}
 */
function generateRating (value) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push('fas fa-star');
    } else if (value + 1 - i >= 0.1) {
      stars.push('fas fa-star-half-alt');
    } else {
      stars.push('far fa-star');
    }
  }

  return stars.map(star => `<i class="${star}"></i>`).join('');
}

registerElement('published-content', PublishedContent);
export default PublishedContent;
