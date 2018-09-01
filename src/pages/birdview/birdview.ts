import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import L from "leaflet";

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
	map: L.Map;
	mapCenter: L.PointTuple = [-41.288889, 174.777222];
	bird: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.bird = navParams.get("item");
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
    console.log('ionViewDidEnter BirdviewPage');
  }
  
  ionViewWillLeave() {
	this.map.off();
	this.map.remove();
  }

  //this.initMap();
}
