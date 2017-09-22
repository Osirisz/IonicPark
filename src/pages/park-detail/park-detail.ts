import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParkDataProvider, Park } from './../../providers/park-data/park-data';
/**
 * Generated class for the ParkDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-park-detail',
  templateUrl: 'park-detail.html',
})
export class ParkDetailPage {
  park: string;
  state: string;
  image: string;
  description: string;
  constructor(private parkData: ParkDataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.parkData.loadPark();
    this.park = navParams.get('park')
    this.state = navParams.get('state')
    this.image = navParams.get('image')
    this.description = navParams.get('description')
  }
  getPath(imgPath){
    return this.parkData.getImageHeadersUrl(imgPath);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkDetailPage');
  }

}
