import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  ngOnInit() {
    // Add smooth scroll behavior to all anchor links
    this.setupSmoothScroll();
  }

  private setupSmoothScroll() {
    // Wait for DOM to be ready
    setTimeout(() => {
      const anchors = document.querySelectorAll('a[href^="#"]');
      anchors.forEach(anchor => {
        anchor.addEventListener('click', (e: Event) => {
          e.preventDefault();
          const href = (anchor as HTMLAnchorElement).getAttribute('href');
          if (href) {
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        });
      });
    }, 100);
  }
}
