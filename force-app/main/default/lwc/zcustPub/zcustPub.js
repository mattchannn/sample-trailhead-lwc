import { LightningElement, wire } from 'lwc';
import {
    subscribe,
    APPLICATION_SCOPE,
    publish,
    MessageContext
} from 'lightning/messageService';
import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class ZcustPub extends LightningElement {

    value = ['option1'];

    get options() {
        return [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }

    // Lightning Messaging Services

    @wire(MessageContext)
    messageContext;

    handleChange(e) {

        this.value = e.detail.value;

        // Lightning Messaging Services

        const payload = {
            options: e.detail.value
        };
        publish(this.messageContext, SampleMessageChannel, payload);
    }

}