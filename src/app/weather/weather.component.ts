import '../shared/interfaces'

import { Component } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service'
import { PositionService } from '../shared/services/position.service'
import { DataStorageService } from '../shared/services/data_storage.service'

@Component({
    selector: 'weather',
    template: `<table-component></table-component>`
})

export class WeatherComponent {

    constructor(
        public tweatherService: WeatherService,
        public tpositionService: PositionService,
        public tdataStorageService: DataStorageService
    ) {
        this.tpositionService
            .getPosition()
            .then((coords: ICoordinates) => {
                this.initWeather(coords.latitude, coords.longitude)
            });
    }

    initWeather(lat: number, lon: number) {
        let tempWeather: IWeather = this.tdataStorageService.getFromLocStor('weather');
        if (tempWeather) {
            this.tdataStorageService.setWeather(tempWeather);
            if (Date.now() - tempWeather.createTime > 10 * 60 * 1000) {
                this.getWeather(lat, lon);
            }
        } else {
            this.getWeather(lat, lon);
        }
    }

    getWeather(lat: number, lon: number) {
        this.tweatherService.getWeather(lat, lon, 50).then((data: IWeather) => {
            this.tdataStorageService.setWeather(data);
            this.tdataStorageService.saveToLocStor('weather', data);
        })
    }
}
