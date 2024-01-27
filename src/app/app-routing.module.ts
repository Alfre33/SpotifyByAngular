import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';


const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=> import('./modules/auth/auth.module').then( m => m.AuthModule )
  },
  {
    path:'',
    loadChildren:()=> import('./modules/home/home.module').then( m => m.HomeModule )
  },
  {
    path:'traks',
    loadChildren:()=> import('./modules/tracks/tracks.module').then( m => m.TracksModule )
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
