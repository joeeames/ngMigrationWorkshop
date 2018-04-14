import { Component, Inject } from "@angular/core";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  currentIdentity: any;

  /*$location, toastr, currentIdentity*/
  constructor(@Inject('$location') private $location ) {
    this.currentIdentity = { currentUser: { firstName: 'joe', lastName: 'eames'}}
    // this.profile = angular.copy(currentIdentity.currentUser);
  }
  
  save() {
    // currentIdentity.updateUser(this.profile);
    // toastr.success('Profile Saved!');
  }
  
  cancel() {
    this.$location.path('/home');
  }
}