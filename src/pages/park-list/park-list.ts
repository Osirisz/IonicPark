import { ParkDataProvider, Park } from './../../providers/park-data/park-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParkDetailPage } from '../park-detail/park-detail';

/**
 * Generated class for the ParkListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-park-list',
  templateUrl: 'park-list.html',
})
export class ParkListPage {
  parkList: Park[];
  
  constructor(private parkData: ParkDataProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.parkData.loadPark().subscribe( data => { this.parkList = data },
      error => { console.log("error : "+error) ; },
      ( ) => { console.log("Read quotes completely.") ; } );
  }
  getPath(imgPath){
    return this.parkData.getImageThumbsUrl(imgPath);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ParkListPage');
  }
  routePark(park) {
    this.navCtrl.push(ParkDetailPage,park) ;
  }
}
