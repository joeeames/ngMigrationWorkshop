angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {
  value: number;
  sessions: any;
  currentIdentity: any;
  
  constructor(private sessions_v2, currentIdentity) {
    this.value = 0;
    this.currentIdentity = currentIdentity;
  }
  
  updateUnreviewedSessionCount() {
    this.sessions_v2.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .then(response => {
      this.value = response.count;
    })
  }
})