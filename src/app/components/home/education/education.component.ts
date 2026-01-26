import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  standalone: false,
  styleUrls: ['./education.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class EducationComponent implements OnInit {
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
  getImage(index: number): string {
    const images = [
      'assets/images/1761577115751.jpg',
      'assets/images/photoBD.jpg',
            'assets/images/bac.jpg'
    ];
    return images[index] || images[0];
  }
  isLeft(index: number): boolean {
    return index % 2 === 0;
  }
}

