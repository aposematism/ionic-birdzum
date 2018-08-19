import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClassifyPage } from '../classify/classify';

@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html'
})
export class BrowsePage {
	
	nativity:string = "any";
	activity:string = "any";
	habitat:string = "any";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
