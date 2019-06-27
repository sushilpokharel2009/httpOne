import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { FeatureComponent } from "./feature/feature.component";
import { MoreComponent } from "./more/more.component";
import { FacilitiesComponent } from "./facilities/facilities.component";
import { AppRoute } from "./app.route";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FeatureComponent,
    MoreComponent,
    FacilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoute,
    HttpClientModule,
    AppRoute,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
