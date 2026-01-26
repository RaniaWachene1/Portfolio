import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, query, transition, stagger, animate } from '@angular/animations';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { UntypedFormControl } from '@angular/forms';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger("animateMenu", [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateY(-50%)" }),
          stagger(50, [
            animate("250ms cubic-bezier(0.35, 0, 0.25, 1)", style({ opacity: 1, transform: "none" }))
          ])
        ], { optional: true })
      ])
    ])
  ],
  standalone: false
})
export class HeaderComponent implements OnInit {

  responsiveMenuVisible: boolean = false;
  pageYPosition: number = 0;
  languageFormControl: UntypedFormControl = new UntypedFormControl();

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
    public languageService: LanguageService
  ) { }

  ngOnInit(): void {
    this.languageFormControl.valueChanges.subscribe(val => this.languageService.changeLanguage(val));
    this.languageFormControl.setValue(this.languageService.language);
  }

  scroll(el: string) {
    const element = document.getElementById(el);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/inicio']).then(() => {
        // Timeout ensures the DOM has rendered the new route before scrolling
        setTimeout(() => {
          document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    }
    this.responsiveMenuVisible = false;
  }

downloadCV() {
  this.languageService.translateService.get("Header.cvName").subscribe(cvFileName => {
    // This starts from the domain root, ignoring whatever Angular route you are currently on
    const url = `assets/cv/${cvFileName}`;
    
    // Create an anchor element to trigger the download correctly
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = cvFileName; // Suggests a filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

  @HostListener('window:scroll', [])
  getScrollPosition() {
    this.pageYPosition = window.pageYOffset;
  }

  changeLanguage(language: string) {
    this.languageFormControl.setValue(language);
  }
}