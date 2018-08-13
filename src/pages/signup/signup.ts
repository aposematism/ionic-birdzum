import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  email:string;
  username:string;
  password:string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  createAcc(){
    const alert = this.alertCtrl.create({
      title: "Account created",
      subTitle: "Your account has been created. Welcome " + this.username + "!",
      buttons: ["Continue"]
    })
    alert.present();

    // Present the user with the homepage
    this.navCtrl.setRoot(ListPage, {username: this.username})
  }
}
