import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { ListagemPage } from '../listagem/listagem';

//import { NavController } from 'ionic-angular';

/**
 * Generated class for the CadastramentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastramento',
  templateUrl: 'cadastramento.html',
})
export class CadastramentoPage {

  post : any = {title:"",  author:"", id:0};

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastramentoPage');
  }

  formSubmit() : void{
    this.http.post('http://localhost:3000/posts', this.post)
        .subscribe(res=>{console.log(res);}, err=>console.log("erro>>>" + err));
    this.navCtrl.parent.select(0);
    //this.navCtrl.pop();
  }

}