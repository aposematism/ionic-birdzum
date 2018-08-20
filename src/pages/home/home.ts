import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome'
import { AlertController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:any;
  constructor(public loginAlert : AlertController, public navCtrl: NavController){

  }

  pushPage(){
    this.doAlert();
    this.navCtrl.push(WelcomePage, {username:this.username});
  }

  doAlert(){
    let alert = this.loginAlert.create({
     title: 'Welcome!',
     message: 'Welcome to SWEN325 App, Dear ' + this.username,
     buttons: ['Ok']
    });
    alert.present()
  }

}
