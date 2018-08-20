import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/authentication/auth.service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BrowsePage } from '../pages/browse/browse';
import { ClassifyPage } from '../pages/classify/classify';
import { SignupPage } from '../pages/signup/signup';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgxErrorsModule } from '@ultimate/ngxerrors';


export const firebaseConfig = {
  fire: {
    apiKey: "AIzaSyAmJDjH8aTqi-c4HHtjADFBODHslpnQplE",
    authDomain: "birdzum.firebaseapp.com",
    databaseURL: "https://birdzum.firebaseio.com",
    projectId: "birdzum",
    storageBucket: "birdzum.appspot.com",
    messagingSenderId: "424306382279"
  }
}
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage,
    ListPage,
    BrowsePage,
    ClassifyPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxErrorsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    ListPage,
    BrowsePage,
    ClassifyPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {

}
