import '../../shared/interfaces';

import {Component, Input, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';
const template = require('./tablerow.template.html');

@Component({
    selector: 'tablerow',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: template
})
export class TableRowComponent {
    constructor() { }

    @Input() format: string;
    @Output() onFavor = new EventEmitter<IDataListItem>();
    @Input() weather: IDataListItem;
    @Output() onDelete = new EventEmitter<IDataListItem>();

    setFavorite() {
        this.onFavor.emit(this.weather)
    }

    setDelete(){
      this.onDelete.emit(this.weather)
    }

}
