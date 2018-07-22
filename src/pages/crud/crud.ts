import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the CrudPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crud',
  templateUrl: 'crud.html'
})
export class CrudPage {

  listagemRoot = 'ListagemPage'
  cadastramentoRoot = 'CadastramentoPage'


  constructor(public navCtrl: NavController) {}

}
