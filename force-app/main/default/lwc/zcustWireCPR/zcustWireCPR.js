import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class ZcustWireCPR extends LightningElement {
    @wire(CurrentPageReference) pageRef;

    get currentPageRef() {
        return this.pageRef ? JSON.stringify(this.pageRef, null, 2) : '';
    }
}
