import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { DataComponent } from './account/data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'app', component: AppComponent },
      { path: 'login', component: LoginComponent },
      { path: 'app-data', component: DataComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ]),

  ],

  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
