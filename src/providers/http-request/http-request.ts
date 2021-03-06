import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class HttpRequestProvider {
  constructor(public http: Http) {
    console.log("Hello HttpRequestProvider Provider");
  }

  public getFotosAleatorias() {
    return this.http.get("https://picsum.photos/1000/300/?random");
  }

  public getFotos() {
    return this.http.get("https://picsum.photos/list");
  }

  public getListaJson() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
