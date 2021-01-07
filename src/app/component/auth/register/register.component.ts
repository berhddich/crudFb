import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder,
    public toastController: ToastController, 
    private _authService: AuthService,
    private _fs: AngularFirestore) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      email: [, Validators.required],
      frestName: [, Validators.required],
      lastNam: [, Validators.required],
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
    this._authService.register(this.registerForm.value).then((auth) => {



      if (auth) {
        auth['user'].sendEmailVerification()
        this._fs.collection('users').doc(auth['user'].uid).set(this.registerForm.value).then( res =>{
          this._authService.signInWithEmailAndPassword(this.registerForm.value).then(log=>{
            this.presentToast('Register completed');
            localStorage.setItem('user', JSON.stringify(auth['user']))
            // this.router.navigate(['app/dashboard']);
          })
        } )


      }



    })
      .catch(error => {

        this.presentToast(error);

      })


  }


}
