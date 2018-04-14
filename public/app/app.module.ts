import { NgModule, } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from "./app.component";
import { NameParser } from "./admin/nameParser.service";
import { UnreviewedTalkComponent } from "./home/unreviewedTalk.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UpgradeModule
  ],
  declarations: [
    AppComponent,
    UnreviewedTalkComponent
  ],
  providers: [
    NameParser
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UnreviewedTalkComponent
  ]
})
export class AppModule {}