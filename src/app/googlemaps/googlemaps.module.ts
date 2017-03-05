import { NgModule } from '@angular/core';

// import { PositionCheckModule } from './position_check/position_check.module';
import { GooglemapsComponent } from './googlemaps.component';

@NgModule({
  imports: [],
  declarations: [
    GooglemapsComponent
  ],
  providers: [],
  exports: [
    // PositionCheckModule
    GooglemapsComponent
  ]
})
export class GoogleMapsModule { }
