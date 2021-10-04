import template from './ActivityItem.template.js';
import { registerElement, BaseHTMLElement } from '../element.js';

class ActivityItem extends BaseHTMLElement {
  constructor () {
    super(template);
    this.useIcons();
  }

  static get observedAttributes () {
    return ['image', 'period'];
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
      default:
        element.innerText = newValue;
        break;
    }
  }
}

registerElement('activity-item', ActivityItem);
export default ActivityItem;
