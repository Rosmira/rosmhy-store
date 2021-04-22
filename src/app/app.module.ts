import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './home/default/default.component';
import { FooterComponent } from './master-page/master-page/footer/footer.component';
import { NavbarComponent } from './master-page/master-page/navbar/navbar.component';
import { SideMenuComponent } from './master-page/master-page/side-menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    FooterComponent,
    NavbarComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
