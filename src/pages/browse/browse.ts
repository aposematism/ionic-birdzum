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
  
  search(){
	console.log("Searching...");
    // Get the birds (just use a dummy function for now)
	let birds = this.getBirds(this.nativity, this.activity, this.habitat);
	console.log(birds);
	
  }
  
  getBirds(n, a, h){
	let allBirds = [
	
		{
			name:"Kiwi",
			activity:"nocturnal",
			habitat:"land",
			nativity:"native",
			description:"Small and brown with a long beak."
		},
		{
			name:"Kereru",
			activity:"diurnal",
			habitat:"land",
			nativity:"native",
			description:"Big, fat, likes berries."
		},
		{
			name:"Seagull",
			activity:"diurnal",
			habitat:"sea",
			nativity:"foreign",
			description:"Steals chips."
		},
		{
			name:"Pigeon",
			activity:"diurnal",
			habitat:"land",
			nativity:"foreign",
			description:"Sky rat."
		}
	
	];
	
	return allBirds;
  }
}
