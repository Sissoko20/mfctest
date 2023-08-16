import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire/compat'
import { AngularFireMessagingModule} from '@angular/fire/compat/messaging'


//config database

const firebaseConfig ={
  apiKey: "AIzaSyDoweugobnMC23GZ0GASvTdYMTU8lARm1g",
  authDomain: "pushnotifweb-ca575.firebaseapp.com",
  projectId: "pushnotifweb-ca575",
  storageBucket: "pushnotifweb-ca575.appspot.com",
  messagingSenderId: "655766889663",
  appId: "1:655766889663:web:0fb3fb7d1cbd0f0a91520a",
  measurementId: "G-RR1NCM2NGQ"
}
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireMessagingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
