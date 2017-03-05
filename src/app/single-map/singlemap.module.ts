import { NgModule } from '@angular/core';

import { SinglemapComponent } from './singlemap.component';

import { WeatherService } from '../shared/services/weather.service';
import { GoogleMapsModule } from '../googlemaps/googlemaps.module';
// import { TableModule } from './single-table/table.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    GoogleMapsModule,
    SharedModule
  ],
  declarations: [
    SinglemapComponent,
  ],
  providers: [
    WeatherService
  ],
  exports: [
    // SinglemapComponent
  ]
})
export class SinglemapModule { }
