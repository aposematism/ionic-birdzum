import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  username = null;
  constructor(public loginAlert : AlertController, public navCtrl: NavController, public navParams : NavParams){
    this.username = this.navParams.get('username');

  }
  doAlert(){
    let alert = this.loginAlert.create({
     title: 'Welcome!',
     message: 'You must be',
     buttons: ['Ok']
    });
    alert.present()
  }

}
