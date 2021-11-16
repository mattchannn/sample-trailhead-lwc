import { LightningElement } from 'lwc';

export default class hd_TrackDecoratorDemo extends LightningElement {
    number = 0;

    renderedCallback() {
        // this.number = 0;
    }

    increment() {
        this.number += 1;
    }

    decrement() {
        if (this.number !== 0) {
            this.number -= 1;
        }
    }

    onQuantityChange(event) {
        console.log(event.target);
    }
}
