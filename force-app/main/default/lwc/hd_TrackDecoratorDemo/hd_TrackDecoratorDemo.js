import { LightningElement, track } from 'lwc';

export default class hd_TrackDecoratorDemo extends LightningElement {

    @track fullName = { firstName : '', lastName : ''};

    renderedCallback() {
        console.log(">> RenderedCallback: render now");
    }

    handleClick(event) {
        console.log(">> handleClick...");
        
        // This will not re-render unless you have @track decorator
        // this.fullName.firstName = 'John';
        // this.fullName.lastName = 'Joe';


        // This will not re-render if the object value is not used in the component
        // E.g.: Removing <p class="slds-p-horizontal_small">Middle name: {fullName.middleName}</p>
        this.fullName.middleName = 'Whatever';

        // This will re-render even without the @track decorator since SF detects mutation
        // this.fullName = {...this.fullName, firstName: "John", lastName: "Joe"}
        
        console.log(">> handleClick: fullName is ", JSON.stringify(this.fullName, null, 2));
    }
}
