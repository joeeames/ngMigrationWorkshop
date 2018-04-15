import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from 'rxjs/operators';

@Injectable()
export class Sessions {
  constructor(private http: HttpClient) {
  }

  getSessionsByUser(userId) {
    return this.http.get('/api/sessions/user/' + userId)
      .toPromise();
  }

  getAllSessions() {
    return this.http.get('/api/sessions').toPromise();
  }
  
  createNewSession(newSession) {
    return this.http.post('/api/sessions', newSession).toPromise();
  }
  
  getNextUnreviewedSession(userId) {
    return this.http.get(`/api/users/${userId}/randomUnreviewedSession`).toPromise();
  }
  
  addReviewedSession(userId, sessionId) {
    return this.http.post('/api/users/' + userId + '/reviewSession/' + sessionId, {}).toPromise();
  }
  
  incrementVote(sessionId) {
    return this.http.put('/api/sessions/' + sessionId + '/incrementVote/', {}).toPromise();
  }
  
  getUnreviewedCount(userId) {
    return this.http.get('/api/users/' + userId + '/unreviewedSessionCount').toPromise();
  }
}
