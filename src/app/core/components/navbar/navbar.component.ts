import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="wrapper bg-soft-primary">
      <nav class="navbar navbar-expand-lg center-logo transparent position-absolute navbar-dark">
        <div class="container justify-content-between align-items-center">

          <!-- Mobile: Logo + Hamburger -->
          <div class="d-flex flex-row w-100 justify-content-between align-items-center d-lg-none">
            <div class="navbar-brand">
             
            </div>
            <div class="navbar-other ms-auto">
              <ul class="navbar-nav flex-row align-items-center">
                <li class="nav-item d-lg-none">
                  <button class="hamburger offcanvas-nav-btn"><span></span></button>
                </li>
              </ul>
            </div>
          </div>

          <div class="navbar-collapse-wrapper d-flex flex-row align-items-center w-100">
            <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">

              <!-- Center Logo (desktop) -->
              <div class="offcanvas-header mx-lg-auto order-0 order-lg-1 d-lg-flex px-lg-15">
                <a routerLink="/" class="transition-none d-none d-lg-flex">
                  <img class="logo-dark"  src="assets/img/logo-purple.png" alt="Invictus Solutions">
                  <img class="logo-light" src="assets/img/logo-light.png"  alt="Invictus Solutions">
                </a>
                <h3 class="text-white fs-30 mb-0 d-lg-none">Invictus Solutions</h3>
                <button type="button" class="btn-close btn-close-white d-lg-none"
                        data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <!-- LEFT NAV -->
              <div class="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
                <ul class="navbar-nav ms-lg-auto">

                  <li class="nav-item">
                    <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" routerLink="/services">All Services</a></li>
                      <li><a class="dropdown-item" routerLink="/services" fragment="web">Web Development</a></li>
                      <li><a class="dropdown-item" routerLink="/services" fragment="mobile">Mobile App Development</a></li>
                      <li><a class="dropdown-item" routerLink="/services" fragment="erp">ERP &amp; Business Applications</a></li>
                      <li><a class="dropdown-item" routerLink="/services" fragment="uiux">UI/UX Design</a></li>
                      <li><a class="dropdown-item" routerLink="/services" fragment="digital">Digital Marketing &amp; SEO</a></li>
                      <li><a class="dropdown-item" routerLink="/services" fragment="agentic">Agentic AI Solutions</a></li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">About Us</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" routerLink="/about">About Invictus</a></li>
                      <li><a class="dropdown-item" routerLink="/about" fragment="mission">Mission &amp; Vision</a></li>
                      <li><a class="dropdown-item" routerLink="/about" fragment="team">Our Team</a></li>
                      <li><a class="dropdown-item" routerLink="/about" fragment="affiliations">Affiliations</a></li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Portfolio</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" routerLink="/portfolio">All Projects</a></li>
                      <li><a class="dropdown-item" routerLink="/portfolio" fragment="web">Web Projects</a></li>
                      <li><a class="dropdown-item" routerLink="/portfolio" fragment="mobile">Mobile Apps</a></li>
                      <li><a class="dropdown-item" routerLink="/portfolio" fragment="enterprise">Enterprise Systems</a></li>
                    </ul>
                  </li>

                </ul>
              </div>

              <!-- RIGHT NAV -->
              <div class="w-100 order-3 order-lg-2 d-lg-flex offcanvas-body">
                <ul class="navbar-nav me-lg-auto">

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                      Careers <span class="badge-hiring">HIRING</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" routerLink="/careers">All Openings</a></li>
                      <li><a class="dropdown-item" routerLink="/careers" fragment="engineering">Engineering</a></li>
                      <li><a class="dropdown-item" routerLink="/careers" fragment="design">Design</a></li>
                      <li><a class="dropdown-item" routerLink="/careers" fragment="marketing">Marketing</a></li>
                      <li><a class="dropdown-item" routerLink="/careers" fragment="culture">Life at Invictus</a></li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Training</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" routerLink="/training-program">Training Overview</a></li>
                      <li><a class="dropdown-item" routerLink="/training-program" fragment="navttc">NAVTTC Program</a></li>
                      <li><a class="dropdown-item" routerLink="/training-program" fragment="pseb">PSEB Program</a></li>
                      <li><a class="dropdown-item" routerLink="/training-program" fragment="paid">Paid Training</a></li>
                    </ul>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" routerLink="/blog">All Posts</a></li>
                      <li><a class="dropdown-item" routerLink="/blog" fragment="web-dev">Web Development</a></li>
                      <li><a class="dropdown-item" routerLink="/blog" fragment="digital-marketing">Digital Marketing</a></li>
                      <li><a class="dropdown-item" routerLink="/blog" fragment="erp">ERP &amp; Business</a></li>
                      <li><a class="dropdown-item" routerLink="/blog" fragment="mobile">Mobile Apps</a></li>
                    </ul>
                  </li>

                  <!-- Mobile CTA inside offcanvas -->
                  <li class="nav-item mt-3 cta-mobile">
                    <a routerLink="/contact" class="btn-inv-contact">
                      <i class="uil uil-phone"></i> Contact
                    </a>
                  </li>

                </ul>
              </div>

              <!-- Mobile offcanvas footer -->
              <div class="offcanvas-body d-lg-none order-4 mt-auto">
                <div class="offcanvas-footer">
                  <a href="mailto:info@invictussolutions.co" class="link-inverse">info&#64;invictussolutions.co</a>
                  <br>+92 (300) 000-0000
                  <nav class="nav social social-white mt-4">
                    <a href="#"><i class="uil uil-facebook-f"></i></a>
                    <a href="#"><i class="uil uil-twitter"></i></a>
                    <a href="#"><i class="uil uil-instagram"></i></a>
                  </nav>
                </div>
              </div>

            </div>
            <!-- /.offcanvas -->

            <!-- Desktop CTA -->
            <div class="cta-desktop ms-3">
              <a routerLink="/contact" class="btn-inv-contact">
                <i class="uil uil-phone"></i> Contact
              </a>
            </div>

          </div>
        </div>
      </nav>
    </header>
  `
})
export class NavbarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Re-init Sandbox theme JS after Angular renders the navbar
    if (typeof (window as any).theme !== 'undefined') {
      (window as any).theme.init?.();
    }
  }
}
