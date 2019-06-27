import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { FeatureComponent } from "./feature/feature.component";
import { MoreComponent } from "./more/more.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      { path: "feature", component: FeatureComponent },
      { path: "more", component: MoreComponent }
    ])
  ],

  exports: [RouterModule]
})
export class AppRoute {}
