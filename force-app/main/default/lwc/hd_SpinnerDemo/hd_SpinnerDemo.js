import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class hd_SpinnerDemo extends NavigationMixin(LightningElement) {
    isLoading;

    handleClick() {
        // Toggle Loading
        this.isLoading = !this.isLoading;
    }
}
