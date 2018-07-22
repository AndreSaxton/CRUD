import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { PostDetalhePage } from '../post-detalhe/post-detalhe';

/**
 * Generated class for the ListagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listagem',
  templateUrl: 'listagem.html',
})
export class ListagemPage {

  posts : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  abrirPost(post): void {
    /*alert("teste"+post);
    alert(post.title);*/
    this.navCtrl.push(PostDetalhePage, {post:post});
  }
  carregarPosts(): void{
    this.http.get('http://localhost:3000/posts').subscribe(data=>this.posts=data);
  }
  ionViewDidEnter(){
    this.carregarPosts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListagemPage');
  }

}
