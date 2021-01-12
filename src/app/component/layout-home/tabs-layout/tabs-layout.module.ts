import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsLayoutComponent } from './tabs-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { CarsComponent } from '../cars/cars.component';
import { ProfilsComponent } from '../profils/profils.component';
const routes: Routes = [
  {
    path: '',
    component: TabsLayoutComponent,
    children: [
      {
        path: 'cars',
        component: CarsComponent,

      },
      {
        path: 'profils',
        component: ProfilsComponent,

      },
      {
        path: '',
        redirectTo: 'cars',
        pathMatch: 'full'

      }



    ]
  },
  {
    path: '',
    redirectTo: 'cars',
    pathMatch: 'full'

  }


];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsLayoutComponent, CarsComponent, ProfilsComponent]
})
export class TabsLayoutModule { }
