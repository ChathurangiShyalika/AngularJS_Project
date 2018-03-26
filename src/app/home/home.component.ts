import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('skills', [
      transition('*=>*', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transition: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transition: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transition: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transition: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transition: 'translateY(35px)', offset: .3 }),
            style({ opacity: 0, transition: 'translateY(-75%)', offset: 1 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add your skills';
  namebtnText: string = 'Add your name';
  skillText: string = 'Your Premiere skill';
  nameText: string = 'Your name';
  skills = [];
  name = "";

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.skill.subscribe(res => this.skills = res);
    this.itemCount = this.skills.length;
    this._data.changeskill(this.skills);
  }

  addItem() {
    this.skills.push(this.skillText);
    this.skillText = '';
    this.itemCount = this.skills.length;
    this._data.changeskill(this.skills);
  }
  addName() {
    this.name.concat(this.nameText);
    this.nameText = '';
  }

  removeItem(i) {
    this.skills.splice(i, 1);
    this._data.changeskill(this.skills);
  }
}
