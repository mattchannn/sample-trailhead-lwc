import { LightningElement, api } from 'lwc';

export default class hd_CheckoutAppointmentListItem extends LightningElement {
    @api appointmentItem;

    showAppointmentDetail = false;

    chevronIcon = this.showAppointmentDetail ? 'utility:chevrondown' : 'utility:chevronright';

    onExpandAppointmentDetailHandler() {
        this.showAppointmentDetail = !this.showAppointmentDetail;
    }
}
