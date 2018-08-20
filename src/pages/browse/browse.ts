import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClassifyPage } from '../classify/classify';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html'
})
export class BrowsePage {
  
  nativity:string = "any";
  activity:string = "any";
  habitat:string = "any";
  searchResults:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  
  search(){
	  
	const loader = this.loadingCtrl.create({
      content: "Fetching search results...",
      duration: 300							// replace once firebase working
    });
    loader.present();
	  
	console.log("Searching...");
    // Get the birds (just use a dummy function for now)
	let birds = this.getBirds(this.nativity, this.activity, this.habitat);
	console.log(birds);
	this.searchResults = birds;
	// Construct items for the birds and add them to the page below the search
	// controls:
	
	
  }
  
  /*Dummy method until firebase is properly set up and populated*/
  getBirds(n, a, h){
	let allBirds = [
	
		{
			name:"Kiwi",
			activity:"nocturnal",
			habitat:"land",
			nativity:"native",
			description:"Small and brown with a long beak."
			img:"img/thumbnail-kiwi.png">
		},
		{
			name:"Kereru",
			activity:"diurnal",
			habitat:"land",
			nativity:"native",
			description:"Big, fat, likes berries."
			img:"img/thumbnail-kereru.png">
		},
		{
			name:"Seagull",
			activity:"diurnal",
			habitat:"sea",
			nativity:"foreign",
			description:"Steals chips."
			img:"img/thumbnail-seagull.png">
		},
		{
			name:"Pigeon",
			activity:"diurnal",
			habitat:"land",
			nativity:"foreign",
			description:"Crrroooo"
			img:"img/thumbnail-pigeon.png">
		}
	
	];
	
	let selectBirds = [];
	
	// exclude by activity
	for(let i in allBirds){
		if(allBirds[i].activity == a || a == "any"){
			selectBirds.push(allBirds[i]);
		}
	}
	allBirds = selectBirds;
	selectBirds = [];	
	// exclude by habitat
	for(let i in allBirds){
		if(allBirds[i].habitat == h || h == "any"){
			selectBirds.push(allBirds[i]);
		}
	}
	allBirds = selectBirds;
	selectBirds = [];	
	// exclude by nativity
	for(let i in allBirds){
		if(allBirds[i].nativity == n || n == "any"){
			selectBirds.push(allBirds[i]);
		}
	}	
	
	return selectBirds;
  }
}
