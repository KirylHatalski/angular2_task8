import { NgModule } from '@angular/core';

import { WeatherComponent } from './weather.component';

import { WeatherService } from '../shared/services/weather.service';

import { TableModule } from './table/table.module';
import { SharedModule } from '../shared/shared.module';
import { PositionCheckModule } from './table/position_check/position_check.module';

@NgModule({
  imports: [TableModule, PositionCheckModule, SharedModule],
  declarations: [
    WeatherComponent,
  ],
  providers: [
    WeatherService
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }
