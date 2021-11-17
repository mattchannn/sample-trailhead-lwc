import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import externalComponentStyle from '@salesforce/resourceUrl/hd_QuantityChangeButtonGroupAlignInput';

export default class hd_QuantityfChangeButtonGroupClone extends LightningElement {
    number = 0;

    async connectedCallback() {
        console.log('>> hd_QuantityChangeButtonGroupClone, connectedCallback, the component is populated to the DOM..');
        // await this.loadGlobalStyle();
    }

    async loadGlobalStyle() {
        try {
            await loadStyle(this, externalComponentStyle);
            console.log('hd_QuantityChangeButtonGroupAlignInput external css file loaded');
        } catch (err) {
            console.error(err);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading hd_QuantityChangeButtonGroupAlignInput',
                    message: err.message,
                    variant: 'error'
                })
            );
        }
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
