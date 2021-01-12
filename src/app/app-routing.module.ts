import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
 
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'auth',
    loadChildren: () => import('./component/auth/auth.module').then(m => m.AuthModule),

},
  {
    path: 'app',
    children:[

     

    {
      path: 'tabs-layout',
      canActivate: [AuthGuard],
      loadChildren: () => import('./component/layout-home/tabs-layout/tabs-layout.module').then(m => m.TabsLayoutModule),

  },


   


    ]
},
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
   
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
