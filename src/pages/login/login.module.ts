import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule implements OnInit {
    loginForm: FormGroup;

    constructor(private auth: AuthenticationProvider, private formBuilder: FormBuilder, private navCtrl: NavController, private navParams: NavParams) {}

    ngOnInit() {
        this.initLoginForm();
    }

    initLoginForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    register() {
        this.auth.register(this.loginForm.value)
        .then(response => {
            this.navCtrl.setRoot(TabsPage);
        })
        .catch(error => {
            // handle error by showing alert
        })
    }

    login() {
        this.auth.login(this.loginForm.value)
        .then(response => {
            this.navCtrl.setRoot(TabsPage);
        })
        .catch(error => {
            // handle error by showing alert
        })
    }
}
