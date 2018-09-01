import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { map, filter, tap } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage'
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {
  previewURL: Observable<any>;
  file: Blob;
  uploadPercent: Observable<number>;
  uploadURL: Observable<string>
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: AngularFireStorage) {
  }

  ionViewDidLoad() {
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
    const task = this.storage.upload(randomId, this.file);

    this.uploadPercent = task.snapshotChanges()
      .pipe(
        map(s => s.bytesTransferred / s.totalBytes * 100)
      );

    this.uploadURL = task.snapshotChanges()
      .pipe(
        filter(s => s.bytesTransferred === s.totalBytes),
        map(s => s.downloadURL),
        tap(console.log),
      )

}

}
