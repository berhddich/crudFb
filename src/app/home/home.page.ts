import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public NavController: NavController) {}


  register() {
    this.NavController.navigateRoot('/app/auth/register')
  }
  login() {
    this.NavController.navigateRoot('/app/auth/login')
  }

}
