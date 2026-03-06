import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar navbar-expand-lg center-logo transparent position-absolute navbar-dark">
      <div class="container justify-content-between align-items-center">

        <!-- ── MOBILE: Logo + Hamburger ── -->
        <div class="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none">
          <div class="navbar-brand">
            <a routerLink="/">
              <img class="logo-dark"  src="../../../../assets/rapid-logo-dark.png" alt="Invictus Solutions" style="height:40px; width:auto;">
              <img class="logo-light" src="../../../../assets/rapid-logo-light.png" style="height:40px; width:auto;">>
            </a>
          </div>
          <button class="hamburger offcanvas-nav-btn"><span></span></button>
        </div>

        <!-- ── COLLAPSE WRAPPER ── -->
        <div class="navbar-collapse-wrapper d-flex flex-row align-items-center w-100">
          <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">

            <!-- Center Logo (desktop only) -->
            <div class="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-15">
              <a routerLink="/" class="transition-none d-none d-lg-flex">
                <img class="logo-dark"  src="../../../../assets/rapid-logo-dark.png" style="height:70px; width:auto;">
                <img class="logo-light" src="../../../../assets/rapid-logo-light.png" style="height:70px; width:auto;">
              </a>
              <!-- Mobile offcanvas header -->
              <h3 class="text-white fs-24 mb-0 d-lg-none">Invictus Solutions</h3>
              <button type="button" class="btn-close btn-close-white d-lg-none"
                      data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <!-- ── LEFT NAV ── -->
            <div class="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
              <ul class="navbar-nav ms-lg-auto">

                <li class="nav-item dropdown">
                  <a class="nav-link" routerLink="/" routerLinkActive="active">Home</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" routerLink="/services" routerLinkActive="active">Services</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" routerLink="/about" routerLinkActive="active">About Us</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" routerLink="/portfolio" routerLinkActive="active">Portfolio</a>
                </li>

              </ul>
            </div>

            <!-- ── RIGHT NAV ── -->
            <div class="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
              <ul class="navbar-nav me-lg-auto">

                <li class="nav-item">
                  <a class="nav-link" routerLink="/careers" routerLinkActive="active">
                    Careers <span class="badge-hiring">HIRING</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" routerLink="/training-program" routerLinkActive="active">Training</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" routerLink="/blog" routerLinkActive="active">Blog</a>
                </li>

                <!-- Mobile CTA -->
                <li class="nav-item mt-3 d-lg-none">
                  <a routerLink="/contact" class="btn-inv-contact">
                    <i class="uil uil-phone"></i> Contact Us
                  </a>
                </li>

              </ul>
            </div>

            <!-- ── Mobile offcanvas footer ── -->
            <div class="offcanvas-body d-lg-none order-4 mt-auto">
              <div class="offcanvas-footer">
                <a href="mailto:info@invictussolutions.co" class="link-inverse">info&#64;invictussolutions.co</a>
                <br>+92 (041) 2408084
                <nav class="nav social social-white mt-4">
                  <a href="https://facebook.com/invictussolutions" target="_blank"><i class="uil uil-facebook-f"></i></a>
                  <a href="https://twitter.com/invictussol" target="_blank"><i class="uil uil-twitter"></i></a>
                  <a href="https://instagram.com/invictussolutions" target="_blank"><i class="uil uil-instagram"></i></a>
                  <a href="https://linkedin.com/company/invictus-solutions" target="_blank"><i class="uil uil-linkedin"></i></a>
                </nav>
              </div>
            </div>

          </div>
          <!-- /.offcanvas -->

          <!-- ── Desktop CTA ── -->
          <div class="d-none d-lg-block ms-3">
            <a routerLink="/contact" class="btn-inv-contact">
              <i class="uil uil-phone"></i> Contact
            </a>
          </div>

        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (typeof (window as any).theme !== 'undefined') {
      (window as any).theme.init?.();
    }
  }
}