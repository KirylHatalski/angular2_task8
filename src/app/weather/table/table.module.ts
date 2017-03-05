import { NgModule } from '@angular/core';

import { TableRowModule } from './tablerow/tablerow.module';
import { TableComponent } from './table.component';
import { SharedModule } from '../../shared/shared.module';
import { PositionCheckModule } from './position_check/position_check.module';

@NgModule({
  imports: [TableRowModule, SharedModule, PositionCheckModule],
  declarations: [TableComponent],
  providers: [],
  exports: [
    // TableRowModule
    TableComponent
  ]
})
export class TableModule { }
