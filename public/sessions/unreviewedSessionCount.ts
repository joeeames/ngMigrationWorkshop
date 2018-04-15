angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {
  value: number;
  currentIdentity: any;
  
  constructor(private sessions, currentIdentity) {
    this.value = 0;
    this.currentIdentity = currentIdentity;
  }
  
  updateUnreviewedSessionCount() {
    this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .then(response => {
      this.value = response.count;
    })
  }
})