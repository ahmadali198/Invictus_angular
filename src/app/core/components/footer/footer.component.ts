import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FormsModule],
  template: `
    <footer class="bg-dark text-inverse">
      <div class="container py-13 py-md-15">
        <div class="row gy-6 gy-lg-0">

          <!-- BRAND + SOCIAL -->
          <div class="col-md-6 col-lg-3">
            <div class="widget">
              <img class="mb-4" src="assets/images/logo.png" alt="Invictus Solutions" style="max-height:50px;">
              <p class="mb-4">
                Delivering innovative digital solutions since 2014.<br class="d-none d-lg-block">
                PSEB & PASHA registered company.
              </p>
              <nav class="nav social social-white">
                <a href="https://www.facebook.com/invictussolutions" target="_blank"><i class="uil uil-facebook-f"></i></a>
                <a href="https://twitter.com/invictussol" target="_blank"><i class="uil uil-twitter"></i></a>
                <a href="https://www.instagram.com/invictussolutions" target="_blank"><i class="uil uil-instagram"></i></a>
                <a href="https://www.linkedin.com/company/invictus-solutions" target="_blank"><i class="uil uil-linkedin"></i></a>
                <a href="https://www.youtube.com/@invictussolutions" target="_blank"><i class="uil uil-youtube"></i></a>
              </nav>
            </div>
          </div>

          <!-- CONTACT INFO -->
          <div class="col-md-6 col-lg-3">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Get in Touch</h4>
              <address class="pe-xl-15 pe-xxl-17">
                101, Regency Arcade, The Mall,<br>
                Faisalabad, Punjab 38000, Pakistan
              </address>
              <a href="mailto:info@invictussolutions.co" class="link-white">info&#64;invictussolutions.co</a><br>
              <a href="tel:+924122408084" class="link-white">+92 (041) 2408084</a><br>
              <a href="tel:+923000880001" class="link-white">+92 300 0880001</a>
            </div>
          </div>

          <!-- QUICK LINKS -->
          <div class="col-md-6 col-lg-3">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Quick Links</h4>
              <ul class="list-unstyled mb-0">
                <li><a routerLink="/about">About Us</a></li>
                <li><a routerLink="/services">Services</a></li>
                <li><a routerLink="/portfolio">Portfolio</a></li>
                <li><a routerLink="/careers">Careers</a></li>
                <li><a routerLink="/training-program">Training Program</a></li>
                <li><a routerLink="/blog">Blog</a></li>
                <li><a routerLink="/contact">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <!-- NEWSLETTER -->
          <div class="col-md-6 col-lg-3">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Our Newsletter</h4>
              <p class="mb-5">Stay updated with our latest projects, news and tech insights.</p>
              <div class="newsletter-wrapper">
                <div class="input-group form-floating">
                  <input type="email" class="form-control"
                         placeholder="Email Address" id="footer-email"
                         [(ngModel)]="email">
                  <label for="footer-email">Email Address</label>
                  <button class="btn btn-primary" type="button" (click)="subscribe()">Join</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- BOTTOM BAR -->
      <div class="container">
        <div class="d-md-flex align-items-center justify-content-between py-4 border-top border-secondary">
          <p class="mb-2 mb-md-0">
            © {{ year }} Invictus Solutions. All rights reserved.
          </p>
          <nav class="nav">
            <a class="nav-link pe-2 ps-0" routerLink="/about">About</a>
            <a class="nav-link px-2" routerLink="/services">Services</a>
            <a class="nav-link px-2" routerLink="/contact">Contact</a>
          </nav>
        </div>
      </div>

    </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
  email = '';

  subscribe(): void {
    if (this.email) {
      console.log('Newsletter signup:', this.email);
      this.email = '';
    }
  }
}