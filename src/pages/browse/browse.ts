import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage'
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import { BirdviewPage } from '../birdview/birdview';

export interface birdItem {name: string; activity: string, habitat: string, nativity: string, flying: string, description: string, behaviourdesc: string, habitatdesc: string}

@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html'
})
export class BrowsePage {

  searchResultText:string = "Tap 'search' to find birds";
  nativity:string = "any";
  activity:string = "any";
  habitat:string = "any";
  flying:string = "any";
  searchResults:any[] = [];
  showImg: Observable<string | null>;

  private birdCol: AngularFirestoreCollection<birdItem>;
  itemsObservable: Observable<birdItem[]>;
  items: birdItem[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private afs: AngularFirestore, private storage: AngularFireStorage) {
    this.birdCol = afs.collection<birdItem>('birdinfo');
    this.itemsObservable = this.birdCol.valueChanges();
    this.itemsObservable.subscribe(res => this.items = res);
    //const ref = this.storage.ref('gs://birdzum.appspot.com/displayimage/kiwi.jpg');
    //this.showImg = ref.getDownloadURL();
  }

  search(){
  	 // Placeholder loader until firebase werking
  	const loader = this.loadingCtrl.create({
        content: "Fetching search results...",
        duration: 300	 						// replace once firebase working
      });
      loader.present();

  	console.log("Searching...");
      // Get the birds
  	let birds = this.filterBirds(this.nativity, this.activity, this.habitat, this.flying);
  	//console.log(birds);
  	this.searchResults = birds;


  	// update search result text
  	this.searchResultText = "Results found";
  }

  filterBirds(n, a, h, f){
    let selectBirds = [];
    let allBirds = this.items;
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
