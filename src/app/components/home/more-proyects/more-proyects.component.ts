// more-proyects.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-more-proyects',
  templateUrl: './more-proyects.component.html',
  standalone: false,
  styleUrls: ['./more-proyects.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95) translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ])
    ])
  ]
})
export class MoreProyectsComponent implements OnInit {
  activeIndex: number | null = null;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  redirect(route: string, event: any) {
    const id = event.target.id;
    if (id === 'demoLink' || id === 'ghLink') {
      return;
    }
    window.open(route, '_blank');
  }

  setActive(index: number): void {
    this.activeIndex = index;
  }

  clearActive(): void {
    this.activeIndex = null;
  }
}


