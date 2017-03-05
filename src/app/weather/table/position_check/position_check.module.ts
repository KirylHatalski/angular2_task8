import { NgModule } from '@angular/core';

import { PositiopCheckerComponent } from './position_check.component';
import { PositionCheckService } from '../../../shared/services/position_check.service';
import { SharedModule } from '../../../shared/shared.module';
// import { TableModule } from '../table.module';

@NgModule({
  imports: [SharedModule],
  declarations: [
    PositiopCheckerComponent
  ],
  providers: [
    PositionCheckService
  ],
  exports: [
    PositiopCheckerComponent
    // SharedModule
  ]
})
export class PositionCheckModule { }
