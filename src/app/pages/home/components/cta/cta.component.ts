import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="wrapper bg-light angled upper-end lower-end">
      <div class="container py-14 py-md-16">
        <div class="row gy-10 gx-lg-8 gx-xl-12 align-items-center">
          <div class="col-lg-7 position-relative">
            <div class="row gx-md-5 gy-5">
              <div class="col-md-6">
                <figure class="rounded mt-md-10" data-cue="fadeIn" data-delay="300">
                  <img src="assets/img/photos/g5.jpg" alt="">
                </figure>
              </div>
              <div class="col-md-6">
                <div class="row gx-md-5 gy-5">
                  <div class="col-md-12 order-md-2">
                    <figure class="rounded" data-cue="fadeIn" data-delay="1100">
                      <img src="assets/img/photos/g6.jpg" alt="">
                    </figure>
                  </div>
                  <div class="col-md-10">
                    <div class="card bg-pale-primary text-center" data-cue="fadeIn" data-delay="800">
                      <div class="card-body py-11 counter-wrapper">
                        <h3 class="counter text-nowrap">300+</h3>
                        <p class="mb-0">Happy Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <h2 class="display-4 mb-3">Let's Build Together</h2>
            <p class="lead fs-lg">
              Have a project in mind? We are <span class="underline">ready to help</span>
              you build something great. Join 300+ businesses who trust Invictus Solutions.
            </p>
            <p>From initial concept to final launch, our team walks with you every step —
               delivering quality, speed, and innovation.</p>
            <a routerLink="/contact" class="btn btn-primary rounded-pill mt-2">Get a Free Quote</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CtaComponent {}
