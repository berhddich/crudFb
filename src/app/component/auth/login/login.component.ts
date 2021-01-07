import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor( private fb: FormBuilder,public toastController: ToastController,  private _authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [, Validators.required],
      password: [, Validators.required],


    });
  
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }

  save(): void {
    this._authService.signInWithEmailAndPassword(this.loginForm.value).then((auth) => {
     
      if (auth) {
        this.presentToast('Login completed');
        localStorage.setItem('user', JSON.stringify(auth['user']))
        // this.router.navigate(['app/dashboard']);

      }



    })
      .catch(error => {

        this.presentToast(error);

      })
console.log(this.loginForm.value);

  }


}
