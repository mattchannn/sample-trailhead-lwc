import { LightningElement, api } from 'lwc';

export default class hd_AppointmentOrderItemsContainer extends LightningElement {
    @api orderItem;

    connectedCallback() {
        console.log('>> Order Item:', JSON.stringify(this.orderItem, null, 2));
    }

    showAppointmentDetail = false;

    chevronIcon = this.showAppointmentDetail ? 'utility:chevrondown' : 'utility:chevronright';

    onExpandAppointmentDetailHandler() {
        this.showAppointmentDetail = !this.showAppointmentDetail;
    }

    onCheckAllOrderItemsHandler(event) {
        let i;
        let checkboxes = this.template.querySelectorAll('[data-id="order-list-checkbox"]');
        for (i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = event.target.checked;
            checkboxes[i].indeterminate = event.target.checked;
        }
    }
}
