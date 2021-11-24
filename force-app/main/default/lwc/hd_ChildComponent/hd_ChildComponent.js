import { LightningElement } from 'lwc';

export default class hd_ChildComponent extends LightningElement {
  message = '';

  handleClick() {
    this.message = 'Hurray';
    this.dispatchEvent(new CustomEvent('clicker', { bubbles: false, composed: true, detail: { message: 'Hurray' } }));
  }
}
