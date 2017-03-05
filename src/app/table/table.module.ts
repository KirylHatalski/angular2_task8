import { NgModule } from '@angular/core';

import { TableRowModule } from './tablerow/tablerow.module';
import { TableComponent } from './table.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule, FormControl  } from '@angular/forms';
import { CityValidator } from '../single-table/city.validator';

@NgModule({
  imports: [TableRowModule, FormsModule, ReactiveFormsModule, SharedModule],
  declarations: [TableComponent, CityValidator],
  providers: [],
  exports: [
    // TableRowModule
    TableComponent
  ]
})
export class TableModule { }
