import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BirdviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-birdview',
  templateUrl: 'birdview.html',
})
export class BirdviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.bird = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BirdviewPage');
  }

}
