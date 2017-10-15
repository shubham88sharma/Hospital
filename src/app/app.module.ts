import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShubhamComponent } from './shubham/shubham.component';
import { SharmaComponent } from './sharma/sharma.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { UserInputComponent } from './user-input/user-input.component';
import { NewPeopleComponent } from './new-people/new-people.component';


@NgModule({
  declarations: [
    AppComponent,
    ShubhamComponent,
    SharmaComponent,
    ClickMeComponent,
    UserInputComponent,
    NewPeopleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      
      {path:'shubham', component: ShubhamComponent},
      {path:'sharma',  component: SharmaComponent},
      {path:'click-me',component: ClickMeComponent},
      {path:'user-input',component: UserInputComponent},
      {path:'new-people', component:NewPeopleComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
