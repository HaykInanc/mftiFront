import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodListComponent } from './good-list/good-list.component';
import { GoodItemComponent } from './good-list/good-item/good-item.component';
import { GoodAddComponent } from './good-list/good-add/good-add.component';
import { DjangoDataService } from './django-data.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    GoodListComponent,
    GoodItemComponent,
    GoodAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DjangoDataService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
