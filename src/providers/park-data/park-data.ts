import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs'

/*
  Generated class for the ParkDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParkDataProvider {

  constructor(public http: Http) {
    console.log('Hello ParkDataProvider Provider');
  }
  loadPark(): Observable<Park[]>{
    return this.http.get('http://web.sit.kmutt.ac.th/sanit/int493/parks.php')
      .map(response => response.json().parks);
  }
  getParkUrl(){
    return 'http://web.sit.kmutt.ac.th/sanit/int493/'
  }
  getImageThumbsUrl(imgPath){
    return  this.getParkUrl()+'assets/img/thumbs/'+imgPath;
  }
  getImageHeadersUrl(imgPath){
    return this.getParkUrl()+'assets/img/headers/'+imgPath;
  }
  
}
export class Park {
  park: string;
  state: string;
  image: string;
  description: string;
}
