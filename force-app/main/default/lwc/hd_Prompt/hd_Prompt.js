import { LightningElement, api } from 'lwc';

export default class hd_Prompt extends LightningElement {
    @api mode;
    @api title;
    @api descriptionText;

    headerBaseTheme = 'slds-modal__header slds-theme_alert-texture';
    headerTheme;

    connectedCallback() {
        this.setHeaderTheme();
    }

    promptButtonClickHandler() {
        this.dispatchEvent(new CustomEvent('promptbuttonclick'));
    }

    setHeaderTheme() {
        switch (this.mode) {
            case 'error':
                this.headerTheme = this.headerBaseTheme + ' slds-theme_error';
                break;
            case 'warning':
                this.headerTheme = this.headerBaseTheme + ' slds-theme_warning';
                break;
            default:
                this.headerTheme = this.headerBaseTheme + ' slds-theme_error';
        }
    }
}
