import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BrowsePage} from '../browse/browse';
import {ClassifyPage} from '../classify/classify';
import {CameraPage} from '../camera/camera';

import L from "leaflet";
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface geotaginfo { id: string, img: string, latitude: number, longitude: number}

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  username:string;
  map: L.Map;
  mapCenter: L.PointTuple = [-41.288889, 174.777222];
  private itemsCollection: AngularFirestoreCollection<geotaginfo>;
  private itemsObservable: Observable<geotaginfo[]>;
  private items: geotaginfo[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private afs : AngularFirestore) {
    this.username = navParams.get("username");
    this.itemsCollection = this.afs.collection<geotaginfo>("geotags");
    this.itemsObservable = this.itemsCollection.valueChanges();
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
		zoom: 10,
    minZoom: 8,
    maxZoom: 25
	});
	// create the tile layer with correct attribution
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 25, attribution: osmAttrib}).addTo(this.map);
	console.log("Map initialized");
  }

  loadMarkers(){
    this.itemsObservable.subscribe((markers: any) => {
      markers.forEach(singleMarker => {
        let markerGroup = L.featureGroup();
        var lat = parseFloat(singleMarker.latitude);
        var long = parseFloat(singleMarker.longitude);
        let marker: any = L.marker([lat, long]);
        marker.bindPopup("<img style=max-height:500px;max-width:500px; src='" + singleMarker.img + "'/>", {maxWidth : 600}).openPopup();
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
      });
    });
  }

  ionViewDidEnter() {
	this.initMap();
  console.log('ionViewDidEnter ListPage');
  this.loadMarkers();
  }

  ionViewWillLeave() {
	this.map.off();
	this.map.remove();
  }
}
