import { LightningElement, api } from 'lwc';

export default class hd_AppointmentOrderItemsContainer extends LightningElement {
    @api appointmentItem;

    connectedCallback() {
        console.log('>> AppointmentItem:', JSON.stringify(this.appointmentItem, null, 2));
    }

    showAppointmentDetail = false;

    chevronIcon = this.showAppointmentDetail ? 'utility:chevrondown' : 'utility:chevronright';

    onExpandAppointmentDetailHandler() {
        this.showAppointmentDetail = !this.showAppointmentDetail;
    }
}
