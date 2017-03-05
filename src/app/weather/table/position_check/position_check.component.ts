import '../../../shared/interfaces';

import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnInit, OnChanges } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { PositionService } from '../../../shared/services/position.service';
import { WeatherService } from '../../../shared/services/weather.service';
import { DataStorageService } from '../../../shared/services/data_storage.service';
import { PositionCheckService } from '../../../shared/services/position_check.service';

const template = require('./position_check.template.html');


@Component({
    selector: 'position-check',
    changeDetection: ChangeDetectionStrategy.OnPush,
    // providers: [PositionService, PositionCheckService, WeatherService],
    template: template
})

export class PositiopCheckerComponent implements OnInit, OnChanges{

    subscription: Subscription;

    @Input() date: Date;
    @Input() curentCity: IDataListItem;
    @Input() format: string;

    constructor(
        public tpositionService: PositionService,
        public tPositionCheckService: PositionCheckService,
        private tDataStorageService: DataStorageService,
        public tWeatherService: WeatherService,
        private cd: ChangeDetectorRef
    ) {}

    ngOnInit(){
      this.subscription = this.tDataStorageService.location$.subscribe(value => {
        this.curentCity.name = value.formatted_address;
        this.cd.markForCheck();
        // console.log(value.formatted_address);
      });
    }

    ngOnChanges(){
    }
}
