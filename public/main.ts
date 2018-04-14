

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, downgradeInjectable } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';
import { NameParser } from './app/admin/nameParser.service';

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {

  angular.module('app')
    .factory('nameParser', downgradeInjectable(NameParser))

  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['app']);
  console.log('hybrid app bootstrapped');
})