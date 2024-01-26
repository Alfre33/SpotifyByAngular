import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideBarComponent}from './components/side-bar/side-bar.component'
import {HeaderUserComponent}from './components/header-user/header-user.component'
import {MediaPlayerComponent}from './components/media-player/media-player.component'


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    MediaPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent
  ],
})
export class SharedModule { }
