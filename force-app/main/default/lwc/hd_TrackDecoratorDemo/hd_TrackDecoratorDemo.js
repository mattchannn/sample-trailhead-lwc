import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class hd_TrackDecoratorDemo extends NavigationMixin(LightningElement) {
    @track fullName = { firstName: '', lastName: '' };
    isShowPrompt = false;
    isDisplayCheckOutAppointmentGroupFlyout = false;

    renderedCallback() {
        console.log('>> hd_TrackDecoratorDemo: <renderedCallback()>: render now');
    }

    navigateToOrderDetailPage() {
        console.log('>> hd_TrackDecoratorDemo: navigating to order detail page');
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Order',
                actionName: 'list'
            }
        });
    }

    showPrompt() {
        console.log('>> hd_TrackDecoratorDemo: showPrompt');
        this.isShowPrompt = true;
    }

    onPromptButtonClickHandler() {
        console.log('>> hd_TrackDecoratorDemo: onPromptButtonClickHandler');
        this.isShowPrompt = false;
    }

    handleClick() {
        console.log('>> handleClick...');

        // This will not re-render unless you have @track decorator
        // this.fullName.firstName = 'John';
        // this.fullName.lastName = 'Joe';

        // This will not re-render if the object value is not used in the component
        // E.g.: Removing <p class="slds-p-horizontal_small">Middle name: {fullName.middleName}</p>
        this.fullName.middleName = 'Whatever';

        // This will re-render even without the @track decorator since SF detects mutation
        // this.fullName = {...this.fullName, firstName: "John", lastName: "Joe"}

        console.log('>> handleClick: fullName is ', JSON.stringify(this.fullName, null, 2));
    }

    openCheckOutAppointmentGroupFlyout() {
        this.isDisplayCheckOutAppointmentGroupFlyout = true;
    }
}
