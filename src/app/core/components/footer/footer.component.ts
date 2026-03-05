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

          <div class="col-md-4 col-lg-3">
            <div class="widget">
              <img class="mb-4" src="assets/img/logo-light.png" alt="Invictus Solutions" style="max-height:40px;">
              <p class="mb-4">© {{ year }} Invictus Solutions.<br class="d-none d-lg-block">All rights reserved.</p>
              <nav class="nav social social-white">
                <a href="https://facebook.com" target="_blank"><i class="uil uil-facebook-f"></i></a>
                <a href="https://twitter.com"  target="_blank"><i class="uil uil-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
              </nav>
            </div>
          </div>

          <div class="col-md-4 col-lg-3">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Get in Touch</h4>
              <address>123 Innovation Drive,<br>Tech City, Pakistan</address>
              <a href="mailto:info@invictussolutions.co">info&#64;invictussolutions.co</a><br>
              +92 (300) 000-0000
            </div>
          </div>

          <div class="col-md-4 col-lg-3">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Quick Links</h4>
              <ul class="list-unstyled mb-0">
                <li><a routerLink="/about">About Us</a></li>
                <li><a routerLink="/services">Services</a></li>
                <li><a routerLink="/portfolio">Portfolio</a></li>
                <li><a routerLink="/careers">Careers</a></li>
                <li><a routerLink="/training-program">Training Program</a></li>
                <li><a routerLink="/contact">Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div class="col-md-12 col-lg-3">
            <div class="widget">
              <h4 class="widget-title text-white mb-3">Our Newsletter</h4>
              <p class="mb-5">Stay updated with our latest projects and news.</p>
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
