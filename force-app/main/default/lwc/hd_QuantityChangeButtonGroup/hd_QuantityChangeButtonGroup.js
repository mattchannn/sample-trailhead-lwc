import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import externalComponentStyle from '@salesforce/resourceUrl/hd_QuantityChangeButtonGroupAlignInput';

export default class hd_QuantityfChangeButtonGroup extends LightningElement {
    number = 0;

    async connectedCallback() {
        console.log('>> hd_QuantityChangeButtonGroup, connectedCallback, the component is populated to the DOM..');
        await this.loadGlobalStyle();
        console.log('>> hd_QuantityChangeButtonGroup, showToast now');
        // this.dispatchEvent(this.errorToastEvent);
    }

    errorToastEvent = new ShowToastEvent({
        title: 'Get Help',
        variant: 'error',
        message: 'Salesforce documentation is available in the app. Click ? in the upper-right corner.',
        mode: 'sticky'
    });

    async loadGlobalStyle() {
        try {
            await loadStyle(this, externalComponentStyle);
            console.log('hd_QuantityChangeButtonGroupAlignInput external css file loaded');
        } catch (err) {
            console.error('Load global style error, error message: ', err ? err.message : '');
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading hd_QuantityChangeButtonGroupAlignInput',
                    message: err ? err.message : 'Load hd_QuantityChangeButtonGroupAlignInput global style error',
                    variant: 'error',
                    mode: 'sticky'
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
