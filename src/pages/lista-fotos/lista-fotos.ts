import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpRequestProvider } from "../../providers/http-request/http-request";

@IonicPage()
@Component({
  selector: "page-lista-fotos",
  templateUrl: "lista-fotos.html"
})
export class ListaFotosPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider
  ) {}

  lista = [];
  ionViewDidLoad() {
    this.httpRequest.getFotos().subscribe(
      (request: any) => {
        var item = JSON.parse(request._body);
        for (let i = 0; i < 20; i++) {
          var aux = item[i];
          aux.foto = "https://picsum.photos/1000/150?image=" + aux.id;
          this.lista.push(aux);
        }
      },
      error => {
        console.log("ERRO: " + error);
      }
    );
  }
}
