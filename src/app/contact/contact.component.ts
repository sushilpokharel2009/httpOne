import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  personForm;
  userForm;
  users;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    /* this.personForm = this.formBuilder.group({
      fname: [],
      lname: [],
      email: [],
      phone: [],
      password: [],
      cPassword: [],
      parents: this.formBuilder.group({
        houseNo: [],
        street: [],
        city: [],
        state: [],
        zip: []
      })
    }); */
    this.userForm = this.formBuilder.group({
      name: [],
      email: [],
      mob: [],
      addr: []
    });
    this.getUsers();
  }

  ngOnInit() {}

  submit() {
    this.http
      .post("http://localhost:9090/user/new", this.userForm.value, {})
      .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => {
          console.log("Done");
        }
      );
  }

  reset() {}

  getUsers() {
    this.http.get("http://localhost:9090/user/getall").subscribe(data => {
      console.log(data);
      this.users = data.result;
    });
  }
}
