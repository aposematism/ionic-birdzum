import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BrowsePage} from '../browse/browse';
import {ClassifyPage} from '../classify/classify';
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

  initMap(){
	this.map = L.map('map', {
		center: this.mapCenter,
		zoom: 11
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
    console.log('ionViewDidEnter ListPage');
  }

  ionViewWillLeave() {
	this.map.off();
	this.map.remove();
  }
}
