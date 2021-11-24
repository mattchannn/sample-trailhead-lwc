import { LightningElement } from 'lwc';

export default class hd_ChildComponent extends LightningElement {
  message = '';

  handleClick() {
    /**
     * using dispatchEvent for external events
     *
     * the below scenario assumes the elements have corresponding event listener attached
     * with bubbles: false > only shadow host will listen to the event
     *
     * with bubbles: true > both shadow host and other elements
     * \ that have the sample listener attached (within the containing component)
     * \ will listen to the event
     */

    /*
    this.dispatchEvent(
      new CustomEvent('clicker', { bubbles: true, composed: false, detail: { message: this.message } })
    );
    */

    /**
     * using template.querySelector.dispatchEvent for internal events
     *
     * the below scenario assumes the elements have corresponding event listener attached
     * with bubbles: false > only elements matches indicator-child will listen to the event
     *
     * with bubbles: true > elements and other elements that have the same listener attached
     * \ (within the child component) will listen to the event
     */

    this.template
      .querySelector('.indicator-child')
      .dispatchEvent(
        new CustomEvent('clicker', { bubbles: false, composed: false, detail: { message: this.message } })
      );
  }

  sectionOnClickHandler() {
    console.log('>> hd_ChildComponent1; sectionOnClickHandler()');
    this.message = this.message + 'child section > ';
  }

  divOnClickHandler() {
    console.log('>> hd_ChildComponent; divOnClickHandler()');
    this.message = this.message + 'child div > ';
  }
}
