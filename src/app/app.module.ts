import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CrudPage } from '../pages/crud/crud';
import { PostDetalhePage } from '../pages/post-detalhe/post-detalhe';
//import { ListagemPage } from '../pages/listagem/listagem';

@NgModule({
  declarations: [
    MyApp,
    CrudPage,
    PostDetalhePage,
    //ListagemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CrudPage,
    PostDetalhePage,
    //ListagemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
