import { NgModule } from '@angular/core';
import { IonicPageModule, NavController, NavParams } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { LoginPage } from './login';
import { WelcomePage } from '../welcome/welcome'

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule{
    constructor(private navCtrl: NavController, private navParams: NavParams) {}

}
