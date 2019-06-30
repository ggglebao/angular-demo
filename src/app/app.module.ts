import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TestModelComponent } from './test-model/test-model.component';
import { ParentAndChlidComponent } from './parent-and-chlid/parent-and-chlid.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';
import { BrotherComponent } from './brother/brother.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TestModelComponent,
    ParentAndChlidComponent,
    FatherComponent,
    SonComponent,
    BrotherComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
