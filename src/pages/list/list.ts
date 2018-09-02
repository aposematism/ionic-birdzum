import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BrowsePage} from '../browse/browse';
import {ClassifyPage} from '../classify/classify';
import {CameraPage} from '../camera/camera';
import L from "leaflet";


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  username:string;
  map: L.Map;
  mapCenter: L.PointTuple = [-41.288889, 174.777222];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = navParams.get("username");
  }

  gotoBrowse(){
    this.navCtrl.setRoot(BrowsePage, {});
  }
  gotoClassify(){
    this.navCtrl.setRoot(ClassifyPage, {});
  }
  gotoCamera(){
    this.navCtrl.setRoot(CameraPage, {});
  }

  initMap(){
	this.map = L.map('map', {
		center: this.mapCenter,
		zoom: 10
	});
	// create the tile layer with correct attribution
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib}).addTo(this.map);	
	console.log("Map initialized");
  }

  ionViewDidEnter() {
	this.initMap();
    console.log('ionViewDidEnter ListPage');
  }

  ionViewWillLeave() {
	this.map.off();
	this.map.remove();
  }
}
