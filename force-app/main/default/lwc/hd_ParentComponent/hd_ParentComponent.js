import { LightningElement } from 'lwc';

export default class hd_ParentComponent extends LightningElement {
  message;

  childOnClickHandler(evt) {
    console.log('>> childOnClickHandler: The event is now bubbled to hd_ParentComponent');
    this.message = evt.detail.message + ' from childOnClickHandler';
  }

  divOnClickHandler(evt) {
    console.log('>> divOnClickHandler: The event is now bubbled to hd_ParentComponent and then to the div as well');
    this.message = evt.detail.message + ' from divOnClickHandler';
  }
}
