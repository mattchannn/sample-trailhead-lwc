import { LightningElement, wire } from 'lwc';

// Import message service features required for subscribing and the message channel
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext
} from 'lightning/messageService';

import SampleMessageChannel from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class ZcustSub extends LightningElement {
    subscription = null;
    value = "";

    // Lightning Messaging Services
    @wire(MessageContext)
    messageContext;

    handleMessage(message) {
        this.value = message.options.join(',');
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                SampleMessageChannel,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }
}