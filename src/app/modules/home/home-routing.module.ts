import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

// import {  SideBarComponent  } from './../../shared/components/side-bar/side-bar.component';
// import {SideBarComponent} from '@shared/components/side-bar/SideBarComponent';

const routes: Routes = [
  {
    path: '',    //Todo: http://localhost:4200/
    //path: 'prefijo/:username/:other',    //Todo: http://localhost:4200/home/dashboard
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
