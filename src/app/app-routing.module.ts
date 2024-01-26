import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';


const routes: Routes = [
  {
    path:'home', //Todo: http://localhost:4200/home
    loadChildren:()=> import('./modules/home/home.module').then( m => m.HomeModule )
  },
  { path: '', component: SideBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
