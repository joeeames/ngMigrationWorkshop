import { NgModule, } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from "./app.component";
import { NameParser } from "./admin/nameParser.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UpgradeModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    NameParser
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [

  ]
})
export class AppModule {}