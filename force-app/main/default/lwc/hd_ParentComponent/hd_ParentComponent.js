import { LightningElement } from 'lwc';

export default class hd_ParentComponent extends LightningElement {
  message;

  shadowHostOnClickHandler(evt) {
    console.log('>> shadowHostOnClickHandler(): The event is now bubbled to hd_ParentComponent');
    this.message = evt.detail.message + 'parent shadow host > ';
  }

  divOnClickHandler(evt) {
    console.log('>> divOnClickHandler(): The event is now bubbled to hd_ParentComponent');
    this.message = evt.detail.message + 'parent div > ';
  }

  sectionOnClickHandler(evt) {
    console.log('>> sectionOnClickHandler(): The event is now bubbled to hd_ParentComponent');
    this.message = evt.detail.message + 'section div > ';
  }
}
