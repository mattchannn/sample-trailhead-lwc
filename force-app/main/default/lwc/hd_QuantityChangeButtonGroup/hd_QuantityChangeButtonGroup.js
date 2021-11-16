import { LightningElement } from 'lwc';

export default class hd_QuantityfChangeButtonGroup extends LightningElement {
    number = 0;

    increment() {
        this.number += 1;
    }

    decrement() {
        if (this.number !== 0) {
            this.number -= 1;
        }
    }
    decimalCheck(event) {
        if (event.key === '.' || event.key === 'e' || event.key === 'E') {
            event.preventDefault();
        }
    }
    onQuantityChange(event) {
        if (!isNaN(event.target.value)) {
            // this.number = parseInt(event.target.value);
            this.number = Number(event.target.value);
        }
    }
}
