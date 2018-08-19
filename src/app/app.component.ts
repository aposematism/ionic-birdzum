import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgModule } from '@angular/core';
import { firebase } from 'firebase';

import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    Firebase.initializeApp({
        apiKey: "AIzaSyAmJDjH8aTqi-c4HHtjADFBODHslpnQplE",
        authDomain: "birdzum.firebaseapp.com",
        databaseURL: "https://birdzum.firebaseio.com",
        projectId: "birdzum",
        storageBucket: "birdzum.appspot.com",
        messagingSenderId: "424306382279"
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
