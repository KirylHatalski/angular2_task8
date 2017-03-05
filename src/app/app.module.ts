import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
// import { WeatherComponent } from './weather/weather.component';
// import { GooglemapsComponent } from './googlemaps/googlemaps.component';
// import { TableComponent } from './weather/table/table.component';
// import { TableRowComponent } from "./weather/table/tablerow/tablerow.component";
// import { TemperaturePipe } from './shared/temperature.pipe';
// import { OrderByPipe } from './shared/order_by.pipe';
// import { HotnessDirective } from './shared/hotness.directive';
// import { IconDirective } from './shared/icon.directive';
import { SharedModule } from './shared/shared.module';

// import { WeatherModule } from './weather/weather.module';
import { SingletableModule } from './single-table/singletable.module';
import { SinglemapModule } from './single-map/singlemap.module';
import { BothviewModule } from './both-view/bothview.module';

import { RouterModule } from '@angular/router';
import { routes } from '../routes';



@NgModule({
    imports: [
      BrowserModule,
      // WeatherModule,
      // GoogleMapsModule,
      BothviewModule,
      // SingleviewModule,
      SinglemapModule,
      SingletableModule,
      RouterModule.forRoot(routes),
      SharedModule
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
