import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WorkflowListVisibilityService {
  private visibleSubject = new BehaviorSubject<boolean>(true);
  visible$ = this.visibleSubject.asObservable();

  toggle(): void {
    this.visibleSubject.next(!this.visibleSubject.value);
  }
}