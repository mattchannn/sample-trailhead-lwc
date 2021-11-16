import { LightningElement } from 'lwc';

export default class hd_QuantityfChangeButtonGroup extends LightningElement {
    number = 0;

    renderedCallback() {
        // this.number = 0;
    }

    increment() {
        console.log('>> In increment function');
        this.number += 1;
    }

    decrement() {
        console.log('>> In decrement function');
        if (this.number !== 0) {
            this.number -= 1;
        }
    }

    onQuantityChange(event) {
        console.log(event);
    }
}
