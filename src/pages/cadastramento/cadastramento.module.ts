import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastramentoPage } from './cadastramento';

@NgModule({
  declarations: [
    CadastramentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastramentoPage),
  ],
})
export class CadastramentoPageModule {}
