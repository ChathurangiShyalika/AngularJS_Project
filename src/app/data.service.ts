import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private skills = new BehaviorSubject<any>(['Java', 'ReactJS']);
  skill = this.skills.asObservable();

  constructor() { }

  changeskill(skill) {
    this.skills.next(skill);
  }
}
