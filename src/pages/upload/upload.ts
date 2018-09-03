import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, filter, tap, finalize } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage'
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export interface geotaginfo { id: string, img: string, latitude: number, longitude: number}

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  previewURL: Observable<any>;
  file: Blob;
  uploadPercent: Observable<number>;
  uploadURL: Observable<string>;
  lat: number;
  long: number;
  imageURL: string;
  items: Observable<geotaginfo[]>;

  private itemsCollection: AngularFirestoreCollection<geotaginfo>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: AngularFireStorage, private afs: AngularFirestore, private geolocation: Geolocation) {
      this.itemsCollection = this.afs.collection<geotaginfo>("geotags");
      this.items = this.itemsCollection.valueChanges();
  }

  ionViewDidLoad() {
    this.getLoc();
    console.log('ionViewDidLoad UploadPage');
  }

  previewFile(event) {
    const reader = new FileReader();
    this.file = event.target.files[0];
    this.previewURL = fromEvent(reader, 'load').pipe(map(e => reader.result))
    reader.readAsDataURL(this.file);
  }

  uploadFile() {
    const randomId = Math.random().toString(36).substring(7);
    const filepath = 'tagbirdimg/'+randomId;
    const task = this.storage.upload(filepath, this.file);
    const fileRef = this.storage.ref(filepath);
    this.uploadPercent = task.snapshotChanges()
      .pipe(
        map(s => s.bytesTransferred / s.totalBytes * 100),
      );

    this.uploadURL = task.snapshotChanges()
      .pipe(
        filter(s => s.bytesTransferred === s.totalBytes),
        map(s => s.downloadURL),
        tap(console.log),
      );

    task.snapshotChanges().pipe(
        finalize(() => {
          this.uploadURL = fileRef.getDownloadURL();
          this.getLoc();
          this.uploadURL.subscribe(url => {//Wait until the URL is returned.
            this.imageURL = url;
            this.geolocation.getCurrentPosition().then((resp) => {//Wait until the lat and long are returned.
              this.lat = resp.coords.latitude;
              this.long = resp.coords.longitude;
              this.geoTagUpload();
            }).catch((error) => {
              console.log('Error getting location', error);
            });
          });
        } )
    ).subscribe();
    }

    geoTagUpload(){
      const id = this.afs.createId();
      const img = this.imageURL;
      const latitude = this.lat;
      const longitude = this.long;
      console.log(this.lat);
      console.log(this.long);
      const item: geotaginfo = { id: id, img: img, latitude: latitude, longitude: longitude};
      this.itemsCollection.doc(id).set(Object.assign({}, item)).then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    }

    getLoc(){//This gets the current location of the person using the software.

    }



}
