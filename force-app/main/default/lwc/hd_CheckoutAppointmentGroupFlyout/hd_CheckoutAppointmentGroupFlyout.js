import { LightningElement } from 'lwc';

export default class hd_CheckoutAppointmentGroupFlyout extends LightningElement {
    // TODO: remove this since we retrieve this item from Omniscript JSON data
    customLabels = {
        Com_General_Button_Close: 'Close',
        Com_General_Button_Cancel: 'Cancel',
        Com_General_Button_Save: 'Save',
        Com_General_Button_Submit: 'Submit'
    };

    // TODO: remove the below dummy data
    appointmentItems = [
        {
            title: 'W0004',
            content: 'Accordion details - A'
        },
        {
            title: 'W0005',
            content: 'Accordion details - B'
        },
        {
            title: 'W0006',
            content: 'Accordion details - C'
        }
    ];

    showAppointmentDetail = false;

    get checkoutAppointmentGroupFlyoutClass() {
        var width = window.screen.width;
        if (width <= 768) {
            // ipad
            return 'slds-modal slds-fade-in-open slds-modal_small';
        }
        return 'slds-modal slds-fade-in-open';
    }

    onExpandAppointmentDetailHandler() {
        console.log('>> Clicking...');
        this.showAppointmentDetail = true;
    }
}
