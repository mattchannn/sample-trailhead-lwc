import { LightningElement } from 'lwc';

export default class hd_CheckoutAppointmentGroupFlyout extends LightningElement {
    // TODO: remove this since we retrieve this item from Omniscript JSON data
    customLabels = {
        Com_General_Button_Close: 'Close',
        Com_General_Button_Cancel: 'Cancel',
        Com_General_Button_Save: 'Save',
        Com_General_Button_Submit: 'Submit'
    };

    get checkoutAppointmentGroupFlyoutClass() {
        var width = window.screen.width;
        if (width <= 768) {
            // ipad
            return 'slds-modal slds-fade-in-open slds-modal_small';
        }
        return 'slds-modal slds-fade-in-open';
    }

    activeSections = ['A', 'B', 'C'];

    closeCheckOutAppointmentGroupFlyout() {}
}
