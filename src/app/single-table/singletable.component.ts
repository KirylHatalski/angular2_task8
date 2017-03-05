import '../shared/interfaces'

import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../shared/services/weather.service';

const template = require('./singletable.template.html');

@Component({
    selector: 'singleview',
    template: template
})

export class SingletableComponent implements OnInit {

    constructor( public weatherService: WeatherService ) { }

    ngOnInit(){
      this.weatherService.getLocalCityList()
    }

}
