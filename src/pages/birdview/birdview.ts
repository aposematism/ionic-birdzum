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
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiYmlnZ2VkeXNtYWxscyIsImEiOiJjamxlaGY1eGYwMzRpM3Jya2dwYWZ4bGI5In0.Zv-32vhEb8IMz7z5YMEo3A'
	}).addTo(this.map);
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
