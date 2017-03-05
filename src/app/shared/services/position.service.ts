import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import '../interfaces';

@Injectable()
export class PositionService {

    constructor (private http: Http) {}

    private extractData(res: Response) {
          let body = res.json();
          return body || { };
    }

    getPosition(): Promise<Object> {
        let coords: ICoordinates;

        function getRandom(range: number) {
            return (Math.random() * range) - (range / 2);
        }

        return new Promise((resolve: Function, reject: Function) => {
            navigator.geolocation.getCurrentPosition(
                (position: IPositionNavigator) => {
                    coords = position.coords;
                    resolve(coords);
                },
                () => {
                    console.log('Something going wrong');
                    coords.latitude = getRandom(180);
                    coords.longitude = getRandom(360);

                    resolve(coords);
                });
        });
    };

    getViewPortCoordinates(map: google.maps.Map): Promise<Object> {
      return new Promise((resolve: Function, reject: Function) => {
        let lng: number,
            lat: number;

            lat = map.getCenter().lat();
            lng = map.getCenter().lng();

        if(map){
          resolve({lat: lat, lng: lng})
        }
      });
    };

    getNearestCityName(lat: number, lng: number): Promise<Object>{
      let url = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=false`

      return this.http.get(url)
                  .toPromise()
                  .then(this.extractData)
    }
}
