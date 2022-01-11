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
    orderItems = [
        {
            key: 'W0004',
            items: [
                {
                    name: 'Samsung Tablet',
                    qty: 1,
                    appointmentId: '000123'
                },
                {
                    name: 'Samsung Smart TV',
                    qty: 3,
                    appointmentId: '000124'
                }
            ]
        },
        {
            key: 'W0005'
        },
        {
            key: 'W0006'
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
        this.showAppointmentDetail = true;
    }
}
