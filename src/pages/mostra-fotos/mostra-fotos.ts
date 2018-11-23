import { HttpRequestProvider } from "./../../providers/http-request/http-request";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-mostra-fotos",
  templateUrl: "mostra-fotos.html"
})
export class MostraFotosPage {
  public UrlImgRandom: String;
  public foto = new Array<any>();
  public cont = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider
  ) {}

  ionViewDidLoad() {
    this.procurar();
  }

  proxima() {
    if (this.foto.length == this.cont + 1)
    {
      this.procurar();
    }
    else
    {
      this.cont = this.cont + 1;
    }
  }

  anterior() {
    if (this.cont > 0){
      this.cont--;
    }

  }

  procurar() {
    this.httpRequest.getFotosAleatorias().subscribe(
      response => {
        if (this.foto.length != 0){
          this.cont++;
        }
        this.foto.push(response.url);

      },
      error => {
        console.log("ERRO: " + error);
      }
    );
  }
}
