import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface Certification {
  name: string;
  provider: string;
  logo: string;
  description: string;
  skills: string[];
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl: string;
  isActive: boolean;
}

@Component({
  selector: 'app-certif',
  standalone: false,
  templateUrl: './certif.component.html',
  styleUrls: ['./certif.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CertifComponent implements OnInit {
  certifications: Certification[] = [];
  
  @ViewChild('certificationsScroll') certificationsScroll!: ElementRef;

  ngOnInit(): void {
    this.loadCertifications();
  }

  scrollLeft(): void {
    const container = this.certificationsScroll.nativeElement;
    const scrollAmount = container.offsetWidth * 0.8; // Scroll by 80% of container width
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  }

  scrollRight(): void {
    const container = this.certificationsScroll.nativeElement;
    const scrollAmount = container.offsetWidth * 0.8; // Scroll by 80% of container width
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  loadCertifications(): void {
    this.certifications = [
      {
        name: 'Microsoft Certified: Azure AI Fundamentals',
        provider: 'Microsoft',
        logo: 'assets/images/certifications/microsoft-azure-ai.jpg',
        description: 'Foundational knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services.',
        skills: ['Azure AI', 'Machine Learning', 'Computer Vision', 'NLP', 'Cognitive Services'],
        issueDate: 'January 2025',
        expiryDate: 'Does Not Expire',
        credentialId: '',
        credentialUrl: 'https://www.credly.com/users/rania-wachene/badges#credly',
        isActive: true
      },
      {
        name: 'Microsoft Certified: Azure Fundamentals',
        provider: 'Microsoft',
        logo: 'assets/images/certifications/microsoft-azure.jpg',
        description: 'Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.',
        skills: ['Azure', 'Cloud Computing', 'IaaS', 'PaaS', 'SaaS', 'Cloud Security'],
        issueDate: 'December 2024',
        expiryDate: 'Does Not Expire',
        credentialId: '',
        credentialUrl: 'https://www.credly.com/users/rania-wachene/badges#credly',
        isActive: true
      },
      {
        name: 'DevOps Foundation Professional Certification (DFPC)',
        provider: 'CertiProf',
        logo: 'assets/images/certifications/certiprof.png',
        description: 'Professional certification validating foundational knowledge of DevOps principles, practices, and culture for continuous delivery.',
        skills: ['DevOps', 'CI/CD', 'Agile', 'Collaboration', 'Automation', 'Continuous Delivery'],
        issueDate: 'December 2024',
        expiryDate: 'Does Not Expire',
        credentialId: 'FLLBDLTWDJP-RKHFKRGJL-WBKDHWBHTB',
        credentialUrl: 'https://www.credly.com/users/rania-wachene/badges#credly',
        isActive: true
      },
      {
        name: 'Docker Training Course for the Absolute Beginner',
        provider: 'KodeKloud',
        logo: 'assets/images/certifications/docker.jpg',
        description: 'Comprehensive Docker training covering containerization fundamentals, Docker commands, and container orchestration basics.',
        skills: ['Docker', 'Containers', 'Containerization', 'Docker Compose', 'Image Management'],
        issueDate: 'June 2024',
        expiryDate: 'Does Not Expire',
        credentialId: '2DF17FAEE0FF-2DF179AA5A03-2DF197BD057',
        credentialUrl: 'https://www.credly.com/users/rania-wachene/badges#credly',
        isActive: true
      },
      {
        name: 'Scrum Fundamentals Certified (SFC)',
        provider: 'SCRUMstudy',
        logo: 'assets/images/certifications/scrum.jpg',
        description: 'Understanding of Scrum framework fundamentals, roles, events, and artifacts for agile project management.',
        skills: ['Scrum', 'Agile', 'Sprint Planning', 'Product Backlog', 'Scrum Master', 'Agile Methodology'],
        issueDate: 'July 2024',
        expiryDate: 'Does Not Expire',
        credentialId: '1039388',
        credentialUrl: 'https://www.credly.com/users/rania-wachene/badges#credly',
        isActive: true
      },
      {
        name: 'Scrum for Operations & DevOps Fundamentals Certified (SODFC)',
        provider: 'SCRUMstudy',
        logo: 'assets/images/certifications/scrumops.jpg',
        description: 'Integrating Scrum practices with DevOps and operations for continuous delivery and operational excellence.',
        skills: ['Scrum', 'DevOps', 'Operations', 'Continuous Delivery', 'Agile Operations', 'IT Service Management'],
        issueDate: 'July 2024',
        expiryDate: 'Does Not Expire',
        credentialId: '1011592',
        credentialUrl: 'https://www.credly.com/users/rania-wachene/badges#credly',
        isActive: true
      },
      {
        name: 'Introduction to Cybersecurity',
        provider: 'Cisco Networking Academy',
        logo: 'assets/images/certifications/ciscoCYBER.jpg',
        description: 'Foundational cybersecurity principles, threats, vulnerabilities, and protection strategies for personal and organizational security.',
        skills: ['Cybersecurity', 'Network Security', 'Threat Analysis', 'Security Best Practices', 'Data Protection'],
        issueDate: 'April 2024',
        expiryDate: 'Does Not Expire',
        credentialId: '',
        credentialUrl: 'https://www.credly.com/users/rania-wachene/badges#credly',
        isActive: true
      },
      {
        name: 'Introduction to Modern AI',
        provider: 'Cisco Networking Academy',
        logo: 'assets/images/certifications/ciscoIA.jpg',
        description: 'Comprehensive introduction to artificial intelligence, machine learning concepts, and AI applications in modern technology.',
        skills: ['Artificial Intelligence', 'Machine Learning', 'AI Applications', 'Data Science', 'Neural Networks'],
        issueDate: 'May 2024',
        expiryDate: 'Does Not Expire',
        credentialId: '',
        credentialUrl: 'https://www.credly.com/users/rania-wachene/badges#credly',
        isActive: true
      }
    ];
  }

  getTotalCertifications(): number {
    return this.certifications.length;
  }

  getActiveCertifications(): number {
    return this.certifications.filter(cert => cert.isActive).length;
  }

  getProviderCount(): number {
    const providers = new Set(this.certifications.map(cert => cert.provider));
    return providers.size;
  }
}