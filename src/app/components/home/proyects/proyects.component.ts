import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
  standalone: false,
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
    ])
  ]
})
export class ProyectsComponent implements OnInit {

  isModalOpen = false;
  selectedProject: any = null;
  selectedProjectIndex = 0;
  currentScreenshotIndex = 0;

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isModalOpen) {
        this.closeModal();
      }
      if (this.isModalOpen && this.selectedProject?.imgs?.length > 0) {
        if (e.key === 'ArrowLeft') {
          this.previousScreenshot();
        } else if (e.key === 'ArrowRight') {
          this.nextScreenshot();
        }
      }
    });
  }

  openModal(project: any, index: number): void {
    this.selectedProject = project;
    this.selectedProjectIndex = index;
    this.isModalOpen = true;
    this.currentScreenshotIndex = 0;
    document.body.style.overflow = 'hidden';
    
    // Analytics
    this.analyticsService.sendAnalyticEvent('view_project_details', 'projects', project.Title);
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedProject = null;
    this.currentScreenshotIndex = 0;
    document.body.style.overflow = '';
  }

  nextScreenshot(): void {
    if (this.selectedProject?.imgs?.length > 0) {
      this.currentScreenshotIndex = (this.currentScreenshotIndex + 1) % this.selectedProject.imgs.length;
    }
  }

  previousScreenshot(): void {
    if (this.selectedProject?.imgs?.length > 0) {
      this.currentScreenshotIndex = this.currentScreenshotIndex === 0 
        ? this.selectedProject.imgs.length - 1 
        : this.currentScreenshotIndex - 1;
    }
  }

  goToScreenshot(index: number): void {
    this.currentScreenshotIndex = index;
  }

}