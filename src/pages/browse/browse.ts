import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { BirdviewPage } from '../birdview/birdview';

@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html'
})
export class BrowsePage {
  
  searchResultText:string = "<i>Tap 'search' to find birds</i>";
  nativity:string = "any";
  activity:string = "any";
  habitat:string = "any";
  flying:string = "any";
  searchResults:any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  
  search(){
	 // Placeholder loader until firebase werking
	const loader = this.loadingCtrl.create({
      content: "Fetching search results...",
      duration: 300	 						// replace once firebase working
    });
    loader.present();
	    
	console.log("Searching...");
    // Get the birds (just use a dummy function for now)
	let birds = this.getBirds(this.nativity, this.activity, this.habitat, this.flying);
	console.log(birds);
	this.searchResults = birds;
	
	// update search result text
	this.searchResultText = this.searchResults.length + " results found";
	
  }
  
  /*Dummy method until firebase is properly set up and populated*/
  getBirds(n, a, h, f){
	let allBirds = [
	
		{
			name:"Kiwi",
			activity:"nocturnal",
			habitat:"land",
			nativity:"native",
			flying:"flightless",
			description:"Small and brown with a long beak.",
			img:"img/thumbnail-kiwi.png",
			
			behaviourdesc: "Forages around at night, looking for bugs which it hunts with its keen sense of smell. Sleeps during the day.",
			habitatdesc: "Bushy areas with minimal predators."
		},
		{
			name:"Kereru",
			activity:"diurnal",
			habitat:"land",
			nativity:"native",
			flying:"flying",
			description:"Big, fat, likes berries.",
			img:"img/thumbnail-kereru.png",
			
			behaviourdesc: "Sits on branches during the day, straining them with its immense weight. Kereru often eat berries, particularly fermented ones which they get drunk from.",
			habitatdesc: "Forested areas."
		},
		{
			name:"Seagull",
			activity:"diurnal",
			habitat:"sea",
			nativity:"foreign",
			flying:"flying",
			description:"Steals chips.",
			img:"img/thumbnail-seagull.png",
			
			behaviourdesc: "Flies around coastal areas looking for delicious chips to steal from their main prey: unsuspecting families having picnics. Often gulls can be found screeching at each other for no good reason and sitting around looking stupid.",
			habitatdesc: "Coastal areas, where chip-based picnics are common."
		},
		{
			name:"Pigeon",
			activity:"diurnal",
			habitat:"land",
			flying:"flying",
			nativity:"foreign",
			description:"Crrroooo",
			img:"img/thumbnail-pigeon.png",
			
			behaviourdesc: "Waddles around cities looking for dropped breadcrumbs, scooting between people's legs as they navigate the dangerous streets.",
			habitatdesc: "Cities with abundant nesting spots."
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
	allBirds = selectBirds;
	selectBirds = [];	
	// exclude by flightlessness
	for(let i in allBirds){
		if(allBirds[i].flying == f || f == "any"){
			selectBirds.push(allBirds[i]);
		}
	}	
	
	return selectBirds;
  }
  
  viewBird(bird){
	  console.log("You clicked: " + bird.name);
	  this.navCtrl.push(BirdviewPage, {item: bird})
  }
}
