import { NgModule } from '@angular/core';

// import { WindDirective } from './weather/wind.directive';
import { TableRowComponent } from "./tablerow.component";
import { SharedModule } from '../../../shared/shared.module';
import { WindDirective } from './wind.directive';

@NgModule({
  imports: [SharedModule],
  declarations: [TableRowComponent, WindDirective],
  providers: [],
  exports: [
    // SharedModule
    TableRowComponent
  ]
})
export class TableRowModule { }
