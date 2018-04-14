import { Component } from "@angular/core";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  currentIdentity: any;

  constructor(/*$location, toastr, currentIdentity*/) {
    this.currentIdentity = { currentUser: { firstName: 'joe', lastName: 'eames'}}
    // this.profile = angular.copy(currentIdentity.currentUser);
  }
  
  save() {
    // currentIdentity.updateUser(this.profile);
    // toastr.success('Profile Saved!');
  }
  
  cancel() {
    // $location.path('/home');
  }
}