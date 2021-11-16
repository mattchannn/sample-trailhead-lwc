import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import externalStyle from '@salesforce/resourceUrl/hd_QuantityChangeButtonGroupAlignInput';

export default class hd_QuantityfChangeButtonGroup extends LightningElement {
    number = 0;

    renderedCallback() {
        console.log('>> hd_QuantityChangeButtonGroup rendered..');
        loadStyle(
            this,
            externalStyle + '/hd_QuantityChangeButtonGroupAlignInput.css'
        )
            .then(() => {
                console.log(
                    'hd_QuantityChangeButtonGroupAlignInput external css file loaded'
                );
            })
            .catch((error) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error loading hd_QuantityChangeButtonGroupAlignInput',
                        message: error.message,
                        variant: 'error'
                    })
                );
            });
    }

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
