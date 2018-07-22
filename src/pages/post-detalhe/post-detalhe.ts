import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

/**
 * Generated class for the PostDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-detalhe',
  templateUrl: 'post-detalhe.html',
})
export class PostDetalhePage {

  post : any [];
  /*postNovo : any [{
  	title:"testeALT",
  	author:"test"
  }];  */
  titulo="teste";

  editarCadastro(codigo){
	  //alert(this.post.title);//
	  document.getElementById("input1").readOnly = false;
	  document.getElementById("input2").readOnly = false;
	  document.getElementById("input1").focus();
	  document.getElementById("tr1").style.display = "none";
	  document.getElementById("tr2").style.display = "none";
	  document.getElementById("tr3").style.visibility = "visible";
	/*
  	this.http.put('http://localhost:3000/posts/'+codigo, {title:this.titulo, author: "autor"})
        	.subscribe(res=>{console.log(res);}, err=>console.log("erro>>>" + err));
	*/	
  }
  
  salvarAlteracao(codigo){
		if(confirm("Deseja salvar as alterações?")){
			this.http.put('http://localhost:3000/posts/'+codigo, {title:this.post.title, author: this.post.author}).subscribe(res=>{console.log(res);}, err=>console.log("erro>>>" + err));
			alert("Alteração realizada!");
			//this._location.back();
      this.navCtrl.parent.select(0);
		}
		else
			alert("Operação cancelada!");
  }

  excluirCadastro(codigo){
  	let dialogo = confirm("Deseja excluir este cadastro?");  	
  	if(dialogo){
  		this.http.delete('http://localhost:3000/posts/'+codigo)
        	.subscribe(res=>{console.log(res);}, err=>console.log("erro>>>" + err));
    	//this.navCtrl.parent.select(0);
		alert("Cadastro Excluido\ncom sucesso!");
		//this._location.back();
    this.navCtrl.parent.select(0);
  	}
  	else
  		alert("Exclusão Cancelada.");
  }
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private http: HttpClient, private _location: Location) {
    this.post = navParams.get('post');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetalhePage');
  }

}
