import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  standalone: false,
  styleUrls: ['./languages.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9) translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ])
    ])
  ]
})
export class LanguagesComponent implements OnInit {
  activeIndex: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  setActive(index: number): void {
    this.activeIndex = index;
  }

  clearActive(): void {
    this.activeIndex = null;
  }

}


