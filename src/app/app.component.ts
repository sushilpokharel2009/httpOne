import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "httpOne";
  // images = [];
  // constructor(private http: HttpClient) {
  //   this.http.get("https://dog.ceo/api/breeds/image/random/30").subscribe(
  //     data => {
  //       console.log(data);
  //       this.images = data.message;
  //     },
  //     err => {
  //       console.log(err);
  //     },
  //     () => {
  //       console.log("DONE");
  //     }
  //   );
  // }
}
