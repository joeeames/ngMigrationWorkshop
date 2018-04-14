import { UpgradeComponent } from "@angular/upgrade/static";
import { Directive, ElementRef, Injector } from "@angular/core";

@Directive({
  selector: 'app-nav'
})
export class NavComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('nav', elementRef, injector);
  }
}