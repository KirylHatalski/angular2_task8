import { NgModule } from '@angular/core';

import { BothviewComponent } from './bothview.component';

import { GooglemapsComponent } from '../googlemaps/googlemaps.component';
import { WeatherComponent } from '../weather/weather.component';
// import { TableComponent } from './weather/table/table.component';
// import { TableRowComponent } from "./weather/table/tablerow/tablerow.component";

import { WeatherModule } from '../weather/weather.module';
import { GoogleMapsModule } from '../googlemaps/googlemaps.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    WeatherModule,
    GoogleMapsModule,
    SharedModule
  ],
  declarations: [
    // GooglemapsComponent,
    // WeatherComponent,
    BothviewComponent,
  ],
  providers: [
    // WeatherService
  ],
  exports: [
    // BothviewModule
  ]
})
export class BothviewModule { }
