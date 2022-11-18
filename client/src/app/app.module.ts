import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from "./header/header.module";
import {LoginModule} from "./auth/login/login.module";
import {SignUpModule} from "./auth/sign-up/sign-up.module";
import {AuthModule} from "./auth/auth.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    LoginModule,
    SignUpModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
