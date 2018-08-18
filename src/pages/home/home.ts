import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:any;
  constructor(public loginAlert : AlertController, public navCtrl: NavController){

  }

  pushPage(){
    this.navCtrl.push(WelcomePage, {username:this.username});
  }

  doAlert(){
    let alert = this.loginAlert.create({
     title: 'Welcome!',
     message: 'Blast from the past!',
     buttons: ['Ok']
    });
    alert.present()
  }

}
