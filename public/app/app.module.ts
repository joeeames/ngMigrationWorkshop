import { NgModule, } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from "./app.component";

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

  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [

  ]
})
export class AppModule {}