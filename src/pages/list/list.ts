import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BrowsePage} from '../browse/browse';
import {ClassifyPage} from '../classify/classify';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  username:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = navParams.get("username");
  }

  gotoBrowse(){
    this.navCtrl.push(BrowsePage, {});
  }
  gotoClassify(){
    this.navCtrl.push(ClassifyPage, {});
  }
}
