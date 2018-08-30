import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/authentication/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListPage } from '../list/list'
import { SignupPage } from '../signup/signup'
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
	loginError: string;


  constructor(private navCtrl: NavController, private auth: AuthService, fb: FormBuilder, public loginAlert : AlertController) {
    this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(ListPage),
				error => this.loginError = error.message
			);
		// display welcome message
		let alert = this.loginAlert.create({
			title: 'Welcome!',
			message: 'Welcome back to The Aviary, ' + this.username + "!",
			buttons: ['Ok']
		});
    alert.present()
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
