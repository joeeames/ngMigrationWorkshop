import { NgModule, } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from "./app.component";
import { NameParser } from "./admin/nameParser.service";
import { UnreviewedTalkComponent } from "./home/unreviewedTalk.component";
import { TalkDurationPipe } from "./common/talkDuration.pipe";
import { ProfileComponent } from "./profile/profile.component";
import { TOASTR_TOKEN } from "./toastr/toastr.service";

function getLocation(i) {
  return i.get('$location')
}
function getCurrentIdentity(i) {
  return i.get('currentIdentity')
}
function getToastr() {
  return toastr;
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UpgradeModule
  ],
  declarations: [
    AppComponent,
    UnreviewedTalkComponent,
    TalkDurationPipe,
    ProfileComponent
  ],
  providers: [
    NameParser,
    { provide: '$location', useFactory: getLocation, deps: ['$injector']},
    { provide: 'currentIdentity', useFactory: getCurrentIdentity, deps: ['$injector']},
    { provide: TOASTR_TOKEN, useFactory: getToastr }
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    UnreviewedTalkComponent,
    ProfileComponent
  ]
})
export class AppModule {}