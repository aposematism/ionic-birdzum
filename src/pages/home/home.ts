import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username:string = "";
  password:string = "";

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

  }

  login(){
    // Check validity (TODO)
    if (this.username == "") {
      const alert = this.alertCtrl.create({
        title: "Invalid login",
        subTitle: "Username cannot be empty.",
        buttons: ["Continue"]
      })
      alert.present();
    }
    else if (this.password == "") {
      const alert = this.alertCtrl.create({
        title: "Invalid login",
        subTitle: "Password cannot be empty.",
        buttons: ["Continue"]
      })
      alert.present();
    }
    // Log the user in
    else {
      this.navCtrl.setRoot(ListPage, {username: this.username})
    }
  }

  gotoSignup(){
    this.navCtrl.push(SignupPage);
  }

}
