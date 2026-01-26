// jobs.component.ts
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  standalone: false,
  styleUrls: ['./jobs.component.scss'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9) translateY(20px)' }),
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ opacity: 0, transform: 'scale(0.9) translateY(20px)' }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class JobsComponent implements OnInit {
  isModalOpen = false;
  selectedJob: any = null;
  selectedJobIndex = 0;
  activeIndex: number | null = null;
  currentScreenshotIndex = 0;

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isModalOpen) {
        this.closeModal();
      }
      if (this.isModalOpen && this.getScreenshots().length > 0) {
        if (e.key === 'ArrowLeft') {
          this.previousScreenshot();
        } else if (e.key === 'ArrowRight') {
          this.nextScreenshot();
        }
      }
    });
  }

private screenshotMap: { [key: string]: string[] } = {
  // Jan 2025 - Aug 2025
  'Jan 2025 - Aug 2025': [
    'assets/images/1765822391144.jpg',
    'assets/images/1765822410813.jpg'
  ],
  // Jan 2022 - Jun 2022
  'Jan 2022 - Jun 2022': [
    'assets/images/ks.png'
  ],
  // Jul 2024 - Sep 2024
  'Jul 2024 - Sep 2024': [
    'assets/images/1.png',
    'assets/images/2.png'
  ],
  // Jul 2023 - Sep 2023
  'Jul 2023 - Sep 2023': [
    'assets/images/datadoit2.png'
  ]
};
getScreenshots(): string[] {
  if (!this.selectedJob) return [];
  // Match the key format used in your screenshotMap
  const key = this.selectedJob.Date; 
  return this.screenshotMap[key] || [];
}

  getGradient(index: number): string {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ];
    return gradients[index % gradients.length];
  }

  openModal(job: any, index?: number): void {
    this.selectedJob = job;
    this.selectedJobIndex = index !== undefined ? index : 0;
    this.isModalOpen = true;
    this.currentScreenshotIndex = 0;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedJob = null;
    this.currentScreenshotIndex = 0;
    document.body.style.overflow = '';
  }

  setActive(index: number): void {
    this.activeIndex = index;
  }

  clearActive(): void {
    this.activeIndex = null;
  }

  isReverse(index: number): boolean {
    return index % 2 !== 0;
  }

  nextScreenshot(): void {
    const screenshots = this.getScreenshots();
    if (screenshots.length > 0) {
      this.currentScreenshotIndex = (this.currentScreenshotIndex + 1) % screenshots.length;
    }
  }

  previousScreenshot(): void {
    const screenshots = this.getScreenshots();
    if (screenshots.length > 0) {
      this.currentScreenshotIndex = this.currentScreenshotIndex === 0 
        ? screenshots.length - 1 
        : this.currentScreenshotIndex - 1;
    }
  }

  goToScreenshot(index: number): void {
    this.currentScreenshotIndex = index;
  }
}