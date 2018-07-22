import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostDetalhePage } from './post-detalhe';

@NgModule({
  declarations: [
    PostDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(PostDetalhePage),
  ],
})
export class PostDetalhePageModule {}
