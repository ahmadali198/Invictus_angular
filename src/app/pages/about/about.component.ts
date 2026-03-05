import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../core/components/page-hero/page-hero.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, PageHeroComponent],
  template: `

    <!-- HERO -->
    <app-page-hero
      imageSrc="assets/img/photos/bg2.jpg"
title="About Invictus Solutions"
      title="About Invictus Solutions"
      breadcrumb="About Us"
      overlayClass="bg-overlay-400">
    </app-page-hero>

    <!-- WHO ARE WE -->
    <section class="wrapper bg-light angled upper-end lower-end">
      <div class="container py-14 py-md-16">
        <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">

          <div class="col-lg-6 position-relative order-lg-2">
            <div class="shape bg-dot primary rellax w-16 h-20" data-rellax-speed="1"
                 style="top:3rem; left:5.5rem"></div>
            <div class="overlap-grid overlap-grid-2">
              <div class="item">
                <figure class="rounded shadow">
                  <img src="assets/images/about/about-banner.jpg" alt="Invictus Office">
                </figure>
              </div>
              <div class="item">
                <figure class="rounded shadow">
                  <img src="assets/images/about/banner.png.jpg" alt="Invictus Team">
                </figure>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <img src="assets/img/icons/lineal/megaphone.svg"
                 class="svg-inject icon-svg icon-svg-md mb-4" alt="">
            <h2 class="display-4 mb-3">Who Are We?</h2>
            <p class="lead fs-lg">
              We are in the business of digital transformation — taking full advantage of technology,
              expertise and agility to help our clients meet their future today.
            </p>
            <p class="mb-6">
              Founded in 2014 and headquartered in Faisalabad, Pakistan, Invictus Solutions is a
              PSEB & PASHA registered software house with 50+ professionals delivering 500+ projects
              across web, mobile, ERP, and digital marketing domains. We believe that success is not
              just about technological expertise — it's about understanding people first.
            </p>
            <div class="row gy-3 gx-xl-8">
              <div class="col-xl-6">
                <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li><span><i class="uil uil-check"></i></span>
                    <span>PSEB & PASHA registered company.</span></li>
                  <li class="mt-3"><span><i class="uil uil-check"></i></span>
                    <span>10+ years of industry experience.</span></li>
                </ul>
              </div>
              <div class="col-xl-6">
                <ul class="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li><span><i class="uil uil-check"></i></span>
                    <span>500+ successfully delivered projects.</span></li>
                  <li class="mt-3"><span><i class="uil uil-check"></i></span>
                    <span>300+ satisfied clients worldwide.</span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <!-- HOW IT WORKS - 3 STEPS -->
        <div class="row mb-5">
          <div class="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
            <img src="assets/img/icons/lineal/list.svg"
                 class="svg-inject icon-svg icon-svg-md mb-4" alt="">
            <h2 class="display-4 mb-4 px-lg-14">
              Here are 3 working steps to organize our business projects.
            </h2>
          </div>
        </div>

        <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">

          <div class="col-lg-6 order-lg-2">
            <div class="card me-lg-6">
              <div class="card-body p-6">
                <div class="d-flex flex-row">
                  <div>
                    <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <span class="number">01</span>
                    </span>
                  </div>
                  <div>
                    <h4 class="mb-1">Discovery & Planning</h4>
                    <p class="mb-0">We dive deep to understand your business goals, audience and requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card ms-lg-13 mt-6">
              <div class="card-body p-6">
                <div class="d-flex flex-row">
                  <div>
                    <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <span class="number">02</span>
                    </span>
                  </div>
                  <div>
                    <h4 class="mb-1">Design & Development</h4>
                    <p class="mb-0">Our team crafts elegant solutions using the latest technologies and best practices.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mx-lg-6 mt-6">
              <div class="card-body p-6">
                <div class="d-flex flex-row">
                  <div>
                    <span class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                      <span class="number">03</span>
                    </span>
                  </div>
                  <div>
                    <h4 class="mb-1">Launch & Support</h4>
                    <p class="mb-0">We deploy, monitor and provide ongoing post-launch support to ensure success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <h2 class="display-6 mb-3">How It Works?</h2>
            <p class="lead fs-lg pe-lg-5">
              Find out everything you need to know about how we deliver world-class digital solutions.
            </p>
            <p>
              At Invictus Solutions, every project follows a structured yet flexible process — from initial
              consultation and requirement gathering to design, development, testing and deployment.
              Our team of 50+ specialists work collaboratively to ensure every deliverable meets the
              highest quality standards.
            </p>
            <p class="mb-6">
              We don't just build products — we build long-term partnerships. Our dedicated project managers
              ensure transparent communication at every stage, with no hidden costs and no surprises.
            </p>
            <a routerLink="/contact" class="btn btn-primary rounded-pill mb-0">Get in Touch</a>
          </div>

        </div>
      </div>
    </section>

    <!-- MISSION & VISION -->
    <section id="mission" class="wrapper bg-soft-primary">
      <div class="container pt-16 pb-14 pb-md-0">
        <div class="row gx-lg-8 gx-xl-0 align-items-center">

          <!-- CEO IMAGE -->
          <div class="col-md-5 col-lg-5 col-xl-4 offset-xl-1 d-none d-md-flex position-relative align-self-end">
            <div class="shape rounded-circle bg-pale-primary rellax w-21 h-21 d-md-none d-lg-block"
                 data-rellax-speed="1" style="top:7rem; left:1rem"></div>
            <figure>
              <!-- CEO image from Invictus assets — adjust path to match your images folder -->
              <img src="assets/images/about/CEO.png"
                   onerror="this.src='assets/img/photos/co1.png'"
                   alt="CEO Invictus Solutions">
            </figure>
          </div>

          <div class="col-md-7 col-lg-6 col-xl-6 col-xxl-5 offset-xl-1">
            <div class="swiper-container dots-start dots-closer mt-md-10 mb-md-15"
                 data-margin="30" data-dots="true">
              <div class="swiper">
                <div class="swiper-wrapper">

                  <div class="swiper-slide">
                    <blockquote class="icon fs-lg">
                      <p>"We are in the business of digital transformation. Our mission is to take full
                      advantage of technology, expertise and agility to simply allow our clients to meet
                      their future today."</p>
                      <div class="blockquote-details">
                        <div class="info ps-0">
                          <h5 class="mb-1">CEO, Invictus Solutions</h5>
                          <p class="mb-0">Faisalabad, Pakistan</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>

                  <div class="swiper-slide">
                    <blockquote class="icon fs-lg">
                      <p>"My goal is to instill trust in our clients, setting a foundation for a long-term
                      business relationship. Today's world requires us to be mindful of human needs and
                      become increasingly more human-responsive."</p>
                      <div class="blockquote-details">
                        <div class="info ps-0">
                          <h5 class="mb-1">CTO, Invictus Solutions</h5>
                          <p class="mb-0">Faisalabad, Pakistan</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>

                  <div class="swiper-slide">
                    <blockquote class="icon fs-lg">
                      <p>"Build and implement better technology to improve life — that is our vision.
                      We are absolutely confident that we always have an IT solution that meets any
                      client's need."</p>
                      <div class="blockquote-details">
                        <div class="info ps-0">
                          <h5 class="mb-1">COO, Invictus Solutions</h5>
                          <p class="mb-0">Faisalabad, Pakistan</p>
                        </div>
                      </div>
                    </blockquote>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section id="team" class="wrapper bg-light">
      <div class="container py-14 py-md-16">
        <div class="row mb-3">
          <div class="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
            <img src="assets/img/icons/lineal/team.svg"
                 class="svg-inject icon-svg icon-svg-md mb-4" alt="">
            <h2 class="display-4 mb-3 px-lg-14">
              Save your time and money by choosing our professional team.
            </h2>
          </div>
        </div>

        <div class="position-relative">
          <div class="shape rounded-circle bg-soft-yellow rellax w-16 h-16"
               data-rellax-speed="1" style="bottom:.5rem; right:-1.7rem;"></div>
          <div class="shape rounded-circle bg-line red rellax w-16 h-16"
               data-rellax-speed="1" style="top:.5rem; left:-1.7rem;"></div>

          <div class="swiper-container dots-closer mb-6" data-margin="0" data-dots="true"
               data-items-xxl="4" data-items-xl="3" data-items-lg="3"
               data-items-md="2" data-items-xs="1">
            <div class="swiper">
              <div class="swiper-wrapper">

                <div class="swiper-slide">
                  <div class="item-inner">
                    <div class="card">
                      <div class="card-body text-center">
                        <img class="rounded-circle w-15 mb-4"
                             src="assets/images/about/ceo.jpg"
                             onerror="this.src='assets/img/avatars/te1.jpg'"
                             alt="CEO">
                        <h4 class="mb-1">Chief Executive Officer</h4>
                        <div class="meta mb-2">Leadership</div>
                        <p class="mb-2">Visionary leader driving Invictus Solutions' digital transformation strategy.</p>
                        <nav class="nav social justify-content-center mb-0">
                          <a href="https://linkedin.com/company/invictussolutions" target="_blank">
                            <i class="uil uil-linkedin"></i>
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="item-inner">
                    <div class="card">
                      <div class="card-body text-center">
                        <img class="rounded-circle w-15 mb-4"
                             src="assets/img/avatars/te2.jpg" alt="CTO">
                        <h4 class="mb-1">Chief Technology Officer</h4>
                        <div class="meta mb-2">Technology</div>
                        <p class="mb-2">Leading our engineering teams to deliver cutting-edge digital solutions.</p>
                        <nav class="nav social justify-content-center mb-0">
                          <a href="https://linkedin.com/company/invictussolutions" target="_blank">
                            <i class="uil uil-linkedin"></i>
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="item-inner">
                    <div class="card">
                      <div class="card-body text-center">
                        <img class="rounded-circle w-15 mb-4"
                             src="assets/img/avatars/te3.jpg" alt="COO">
                        <h4 class="mb-1">Chief Operations Officer</h4>
                        <div class="meta mb-2">Operations</div>
                        <p class="mb-2">Ensuring seamless project delivery and exceptional client satisfaction.</p>
                        <nav class="nav social justify-content-center mb-0">
                          <a href="https://linkedin.com/company/invictussolutions" target="_blank">
                            <i class="uil uil-linkedin"></i>
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="item-inner">
                    <div class="card">
                      <div class="card-body text-center">
                        <img class="rounded-circle w-15 mb-4"
                             src="assets/img/avatars/te4.jpg" alt="Head of Development">
                        <h4 class="mb-1">Head of Development</h4>
                        <div class="meta mb-2">Engineering</div>
                        <p class="mb-2">Architecting robust and scalable solutions across all platforms.</p>
                        <nav class="nav social justify-content-center mb-0">
                          <a href="https://linkedin.com/company/invictussolutions" target="_blank">
                            <i class="uil uil-linkedin"></i>
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="item-inner">
                    <div class="card">
                      <div class="card-body text-center">
                        <img class="rounded-circle w-15 mb-4"
                             src="assets/img/avatars/te5.jpg" alt="Head of Design">
                        <h4 class="mb-1">Head of Design</h4>
                        <div class="meta mb-2">UI/UX Design</div>
                        <p class="mb-2">Creating beautiful user experiences that delight clients and their customers.</p>
                        <nav class="nav social justify-content-center mb-0">
                          <a href="https://linkedin.com/company/invictussolutions" target="_blank">
                            <i class="uil uil-linkedin"></i>
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="swiper-slide">
                  <div class="item-inner">
                    <div class="card">
                      <div class="card-body text-center">
                        <img class="rounded-circle w-15 mb-4"
                             src="assets/img/avatars/te6.jpg" alt="Marketing Lead">
                        <h4 class="mb-1">Marketing Lead</h4>
                        <div class="meta mb-2">Digital Marketing</div>
                        <p class="mb-2">Driving growth and visibility for Invictus and our clients' brands.</p>
                        <nav class="nav social justify-content-center mb-0">
                          <a href="https://linkedin.com/company/invictussolutions" target="_blank">
                            <i class="uil uil-linkedin"></i>
                          </a>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="wrapper bg-soft-primary">
      <div class="container py-14 py-md-16">
        <div class="row mb-10">
          <div class="col-xl-10 mx-auto">
            <div class="row align-items-center counter-wrapper gy-6 text-center">
              <div class="col-md-3">
                <img src="assets/img/icons/lineal/check.svg"
                     class="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="">
                <h3 class="counter">500</h3>
                <p>Completed Projects</p>
              </div>
              <div class="col-md-3">
                <img src="assets/img/icons/lineal/user.svg"
                     class="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="">
                <h3 class="counter">300</h3>
                <p>Satisfied Clients</p>
              </div>
              <div class="col-md-3">
                <img src="assets/img/icons/lineal/briefcase-2.svg"
                     class="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="">
                <h3 class="counter">50</h3>
                <p>Expert Professionals</p>
              </div>
              <div class="col-md-3">
                <img src="assets/img/icons/lineal/award-2.svg"
                     class="svg-inject icon-svg icon-svg-lg text-primary mb-3" alt="">
                <h3 class="counter">10</h3>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AFFILIATIONS -->
    <section id="affiliations" class="wrapper bg-light">
      <div class="container py-14 py-md-16">
        <div class="row text-center mb-10">
          <div class="col-md-10 col-xl-8 mx-auto">
            <h2 class="display-4 mb-3">Our Affiliations</h2>
            <p class="lead">Proud member of Pakistan's leading technology bodies and international organizations.</p>
          </div>
        </div>
        <div class="row gx-lg-8 gy-6 align-items-center text-center">
          <div class="col-6 col-md-3">
            <div class="card shadow-sm p-5 h-100 d-flex align-items-center justify-content-center">
              <img src="assets/images/affiliations/pseb-logo.jpg"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
                   alt="PSEB" style="max-height:70px; max-width:100%;">
              <p class="mb-0 fw-bold" style="display:none">PSEB</p>
              <p class="text-muted fs-sm mt-2 mb-0">Pakistan Software Export Board</p>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="card shadow-sm p-5 h-100 d-flex align-items-center justify-content-center">
              <img src="assets/images/affiliations/pasha-logo.jpg"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
                   alt="PASHA" style="max-height:70px; max-width:100%;">
              <p class="mb-0 fw-bold" style="display:none">PASHA</p>
              <p class="text-muted fs-sm mt-2 mb-0">Pakistan Software Houses Association</p>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="card shadow-sm p-5 h-100 d-flex align-items-center justify-content-center">
              <img src="assets/images/affiliations/osfp-logo.jpg"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
                   alt="NAVTTC" style="max-height:70px; max-width:100%;">
              <p class="mb-0 fw-bold" style="display:none">NAVTTC</p>
              <p class="text-muted fs-sm mt-2 mb-0">National Vocational & Technical Training Commission</p>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div class="card shadow-sm p-5 h-100 d-flex align-items-center justify-content-center">
              <img src="assets/images/affiliations/CBRE.png"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='block'"
                   alt="SECP" style="max-height:70px; max-width:100%;">
              <p class="mb-0 fw-bold" style="display:none">SECP</p>
              <p class="text-muted fs-sm mt-2 mb-0">Securities & Exchange Commission of Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA / CONTACT -->
    <section class="wrapper bg-light angled upper-end lower-end">
      <div class="container pt-18 pb-14 pt-md-19 pb-md-16">
        <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center">

          <div class="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative">
            <div class="shape bg-dot primary rellax w-17 h-21" data-rellax-speed="1"
                 style="top:-2rem; left:-1.4rem;"></div>
            <figure class="rounded">
              <img src="assets/img/photos/about4.jpg"
                   srcset="assets/img/photos/about4@2x.jpg 2x" alt="">
            </figure>
          </div>

          <div class="col-lg-6">
            <img src="assets/img/icons/lineal/telemarketer.svg"
                 class="svg-inject icon-svg icon-svg-md mb-4" alt="">
            <h2 class="display-4 mb-8">
              Convinced yet? Let's make something great together.
            </h2>
            <div class="d-flex flex-row">
              <div>
                <div class="icon text-primary fs-28 me-6 mt-n1">
                  <i class="uil uil-location-pin-alt"></i>
                </div>
              </div>
              <div>
                <h5 class="mb-1">Address</h5>
                <address>101, Regency Arcade, The Mall,<br>Faisalabad, Punjab 38000, Pakistan</address>
              </div>
            </div>
            <div class="d-flex flex-row">
              <div>
                <div class="icon text-primary fs-28 me-6 mt-n1">
                  <i class="uil uil-phone-volume"></i>
                </div>
              </div>
              <div>
                <h5 class="mb-1">Phone</h5>
                <p>+92 (041) 2408084<br>+92 300 0880001</p>
              </div>
            </div>
            <div class="d-flex flex-row">
              <div>
                <div class="icon text-primary fs-28 me-6 mt-n1">
                  <i class="uil uil-envelope"></i>
                </div>
              </div>
              <div>
                <h5 class="mb-1">E-mail</h5>
                <p class="mb-0">
                  <a href="mailto:info@invictussolutions.co" class="link-body">
                    info&#64;invictussolutions.co
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  `
})
export class AboutComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      (window as any).theme?.init?.();
      // Scroll to fragment if present
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          const el = document.getElementById(fragment);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }, 100);
  }
}