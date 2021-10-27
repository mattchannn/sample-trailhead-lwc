import { createElement } from 'lwc';
import ZcustUnitTest from 'c/ZcustUnitTest';

describe('c-unit-test', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays unit status with default unitNumber', () => {
        const element = createElement('c-unit-test', {
            is: ZcustUnitTest
        });
        expect(element.unitNumber).toBe(5);
        // Add the element to the jsdom instance
        document.body.appendChild(element);
        // Verify displayed greeting
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).toBe('Unit 5 alive!');
    });
});
