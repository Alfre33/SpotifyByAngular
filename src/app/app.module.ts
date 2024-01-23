import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderUserComponent } from './shared/components/header-user/header-user.component';
import { MediaPlayerComponent } from './shared/components/media-player/media-player.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';

@NgModule({
  declarations: [     //Todo:Declaraciones,componente,directivas,pipes
    AppComponent, HeaderUserComponent, MediaPlayerComponent, SideBarComponent
  ],
  imports: [         //Todo:solo se importan otros modulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
