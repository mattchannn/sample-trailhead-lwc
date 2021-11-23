import { LightningElement } from 'lwc';

export default class hd_ChildComponent extends LightningElement {
    handleClick() {
        this.dispatchEvent(new CustomEvent('clicker', { bubbles: true, composed: true, detail: { message: 'The message is now here' } }));
    }
}
