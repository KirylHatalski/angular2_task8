import '../interfaces';

import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

import { DataStorageService } from '../../shared/services/data_storage.service';

//mock
const CITY_LIST = require('../../../public/cityes_list.json');

@Injectable()
export class WeatherService {

    constructor (
      private http: Http,
      private dataStor: DataStorageService
    ) {}

    private extractData(res: Response) {
          let body = res.json();
          return body || { };
    }

    private extractSingleData(res: Response) {
          let body = res.json();
          body.createTime = Date.now();

          return body || { };
    }

    getWeather(lat: number, lon: number, count: number): Promise<Object>{
      let url = `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${count}&&APPID=1c7ecf45bce8b3c0fe6043ec72db7c26`
      return this.http.get(url)
                  .toPromise()
                  .then(this.extractSingleData)
    }

    getWeatherByCityId( id: string ): Promise<Object> {
      let url = `http://api.openweathermap.org/data/2.5/weather?id=${id}&&APPID=1c7ecf45bce8b3c0fe6043ec72db7c26`
      return this.http.get(url)
                  .toPromise()
                  .then(this.extractData)
    }

    getWeatherByCoords(lat: number, lon: number){
      let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&APPID=1c7ecf45bce8b3c0fe6043ec72db7c26`
      return this.http.get(url)
                  .toPromise()
                  .then(this.extractData)
    }

    getWeatherByName(name: string): Promise<IDataListItem>{
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&&APPID=1c7ecf45bce8b3c0fe6043ec72db7c26`
      return this.http.get(url)
                  .toPromise()
                  .then(this.extractData)
    }

    // getLocalCityList(): Promise<ICityList[]>{
    //   return this.http.get(`public/cityes_list.json`)
    //               .toPromise()
    //               .then(this.extractData)
    //               .then((data) => {
    //                 this.dataStor.cityList = data;
    //
    //                 this.setAllCityNames();
    //               })
    // }

    getLocalCityList(): Promise<ICityList[]>{
      return new Promise((resolve, reject) => {
        this.dataStor.cityList = CITY_LIST;
        this.setAllCityNames();
      });
    }

    setAllCityNames(){
      for (let i = 0; i < this.dataStor.cityList.length; i++) {
          this.dataStor.cityNames.push(this.dataStor.cityList[i].name);
      }
    }

    findCityName(name: string, array?: string[]): Promise<string[]> {
      return new Promise((resolve, reject)=> {
        let names = [],
            // name = name.toLowerCase(),
            index;
        if(array && array.length > 0) {
          for (let i = 0; i < array.length; i++) {
            index = array[i].toLowerCase().indexOf(name.toLowerCase())
            // console.log(this.dataStor.cityNames[i].indexOf(name))

            if(index !== -1) {
            names.push(array[i]);
             }
          }
          this.dataStor.selectedNames = names;
          resolve(names);
        }
        for (let i = 0; i < this.dataStor.cityNames.length; i++) {
          // console.log(this.dataStor.cityNames[i].indexOf(name))
          index = this.dataStor.cityNames[i].toLowerCase().indexOf(name.toLowerCase());

          if(index !== -1) {
          names.push(this.dataStor.cityNames[i]);
           }
        }
        this.dataStor.selectedNames = names;
        resolve(names)
      })
    }
}
