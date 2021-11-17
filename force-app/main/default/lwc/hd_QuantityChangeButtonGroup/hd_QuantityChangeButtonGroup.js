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
            console.log('>> hd_QuantityChangeButtonGroup, align input external css file loaded');
        } catch (err) {
            console.error(
                '>> hd_QuantityChangeButtonGroup, Load global style error, err message: ',
                err ? err.message : ''
            );
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
        // For onPaste event
        const clipBoardDataEvent = event.clipboardData || window.clipboardData;
        if (clipBoardDataEvent && isNaN(clipBoardDataEvent.getData('text'))) {
            // console.log('>> hd_QuantityChangeButtonGroup, decimalCheck, clipboard data is', clipBoardDataEvent.getData('text'));
            event.preventDefault();
        }

        // For onKeyDown event
        // console.log('>> hd_QuantityChangeButtonGroup, decimalCheck, event.key is', event.key);
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
