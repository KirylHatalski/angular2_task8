import { NgModule } from '@angular/core';

import { SingletableComponent } from './singletable.component';

import { WeatherService } from '../shared/services/weather.service';
// import { CityValidator } from './city.validator';

import { TableModule } from '../table/table.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    TableModule,
    SharedModule
  ],
  declarations: [
    SingletableComponent,
    // CityValidator
  ],
  providers: [
    WeatherService
  ],
  exports: [
    // SingleviewComponent
  ]
})
export class SingletableModule { }
