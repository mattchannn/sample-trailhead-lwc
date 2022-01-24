import { LightningElement } from 'lwc';

export default class hd_TableOne extends LightningElement {
    fixedWidth = 'width:15rem;';

    //FOR HANDLING THE HORIZONTAL SCROLL OF TABLE MANUALLY
    tableOuterDivScrolled(event) {
        this._tableViewInnerDiv = this.template.querySelector('.tableViewInnerDiv');
        if (this._tableViewInnerDiv) {
            if (!this._tableViewInnerDivOffsetWidth || this._tableViewInnerDivOffsetWidth === 0) {
                this._tableViewInnerDivOffsetWidth = this._tableViewInnerDiv.offsetWidth;
            }
            this._tableViewInnerDiv.style =
                'width:' +
                (event.currentTarget.scrollLeft + this._tableViewInnerDivOffsetWidth) +
                'px;' +
                this.tableBodyStyle;
        }
        this.tableScrolled(event);
    }

    q(event) {
        if (this.enableInfiniteScrolling) {
            if (event.target.scrollTop + event.target.offsetHeight >= event.target.scrollHeight) {
                this.dispatchEvent(
                    new CustomEvent('showmorerecords', {
                        bubbles: true
                    })
                );
            }
        }
        if (this.enableBatchLoading) {
            if (event.target.scrollTop + event.target.offsetHeight >= event.target.scrollHeight) {
                this.dispatchEvent(
                    new CustomEvent('shownextbatch', {
                        bubbles: true
                    })
                );
            }
        }
    }

    //#region ***************** RESIZABLE COLUMNS *************************************/
    handlemouseup(e) {
        this._tableThColumn = undefined;
        this._tableThInnerDiv = undefined;
        this._pageX = undefined;
        this._tableThWidth = undefined;
    }

    handlemousedown(e) {
        if (!this._initWidths) {
            this._initWidths = [];
            let tableThs = this.template.querySelectorAll('table thead .dv-dynamic-width');
            tableThs.forEach((th) => {
                this._initWidths.push(th.style.width);
            });
        }
        console.log('>> handleMouseDown', JSON.parse(JSON.stringify(this._initWidths)));
        console.log('>> e.target', e.target);
        this._tableThColumn = e.target.parentElement;
        this._tableThInnerDiv = e.target.parentElement;
        while (this._tableThColumn.tagName !== 'TH') {
            this._tableThColumn = this._tableThColumn.parentNode;
        }
        while (!this._tableThInnerDiv.className.includes('slds-cell-fixed')) {
            this._tableThInnerDiv = this._tableThInnerDiv.parentNode;
        }
        console.log('handlemousedown this._tableThColumn.tagName => ', JSON.stringify(this._tableThColumn.tagName));
        this._pageX = e.pageX;
        console.log('handlemousedown this._pageX:', JSON.stringify(e.pageX));
        this._padding = this.paddingDiff(this._tableThColumn);
        console.log('handlemousedown this._padding:', JSON.stringify(this._padding));
        this._tableThWidth = this._tableThColumn.offsetWidth - this._padding;
        console.log('handlemousedown this._tableThColumn: %o, this._tableThWidth %o', JSON.stringify(this._tableThColumn.offsetWidth), JSON.stringify(this._tableThWidth));
    }

    handlemousemove(e) {
        console.log('mousemove this._tableThColumn => ', this._tableThColumn);
        if (this._tableThColumn && this._tableThColumn.tagName === 'TH') {
            this._diffX = e.pageX - this._pageX;

            this.template.querySelector('table').style.width =
                this.template.querySelector('table') - this._diffX + 'px';

            this._tableThColumn.style.width = this._tableThWidth + this._diffX + 'px';
            this._tableThInnerDiv.style.width = this._tableThColumn.style.width;

            let tableThs = this.template.querySelectorAll('table thead .dv-dynamic-width');
            let tableBodyRows = this.template.querySelectorAll('table tbody tr');
            let tableBodyTds = this.template.querySelectorAll('table tbody .dv-dynamic-width');
            tableBodyRows.forEach((row) => {
                let rowTds = row.querySelectorAll('.dv-dynamic-width');
                rowTds.forEach((td, ind) => {
                    rowTds[ind].style.width = tableThs[ind].style.width;
                });
            });
        }
    }

    handledblclickresizable() {
        let tableThs = this.template.querySelectorAll('table thead .dv-dynamic-width');
        let tableBodyRows = this.template.querySelectorAll('table tbody tr');
        tableThs.forEach((th, ind) => {
            th.style.width = this._initWidths[ind];
            th.querySelector('.slds-cell-fixed').style.width = this._initWidths[ind];
        });
        tableBodyRows.forEach((row) => {
            let rowTds = row.querySelectorAll('.dv-dynamic-width');
            rowTds.forEach((td, ind) => {
                rowTds[ind].style.width = this._initWidths[ind];
            });
        });
    }

    paddingDiff(col) {
        if (this.getStyleVal(col, 'box-sizing') === 'border-box') {
            return 0;
        }

        this._padLeft = this.getStyleVal(col, 'padding-left');
        this._padRight = this.getStyleVal(col, 'padding-right');
        return parseInt(this._padLeft, 10) + parseInt(this._padRight, 10);
    }

    getStyleVal(elm, css) {
        return window.getComputedStyle(elm, null).getPropertyValue(css);
    }
}
