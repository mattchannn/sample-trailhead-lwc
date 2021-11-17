import { LightningElement, api } from 'lwc';

export default class hd_Prompt extends LightningElement {
    @api mode;
    @api title;

    headerBaseTheme = 'slds-modal__header slds-theme_alert-texture';
    headerTheme;

    connectedCallback() {
        this.setHeaderTheme();
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
                console.log('Default');
        }
    }
}
