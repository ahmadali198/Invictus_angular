import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white"
             data-image-src="assets/img/photos/bg2.jpg">
      <div class="container py-14 py-md-17">
        <h2 class="display-4 mb-5 text-white text-center">Happy Clients</h2>
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto" data-cue="fadeIn">
            <div class="swiper-container dots-light dots-closer text-center mb-6"
                 data-margin="30" data-dots="true">
              <div class="swiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" *ngFor="let t of testimonials">
                    <blockquote class="border-0 fs-lg mb-0">
                      <p>"{{ t.quote }}"</p>
                      <div class="blockquote-details justify-content-center">
                        <img class="rounded-circle w-12"
                             [src]="t.avatar" [alt]="t.name">
                        <div class="info">
                          <h6 class="mb-1 text-white">{{ t.name }}</h6>
                          <p class="mb-0">{{ t.role }}</p>
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
  `
})
export class TestimonialsComponent {
  testimonials = [
    {
      quote: 'Invictus Solutions transformed our outdated ERP into a modern, high-performing platform. The team was professional, responsive, and delivered beyond our expectations.',
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: 'assets/img/avatars/te1.jpg'
    },
    {
      quote: 'Working with Invictus on our mobile app was a fantastic experience. They understood our vision perfectly and delivered on time and within budget.',
      name: 'Ahmed Raza',
      role: 'Product Manager, NovaCorp',
      avatar: 'assets/img/avatars/te2.jpg'
    },
    {
      quote: 'The UI/UX team at Invictus created an interface so intuitive our users barely needed a tutorial. Conversion rates improved by 40% in the first month.',
      name: 'Maria Gonzalez',
      role: 'Marketing Director, BrightEdge',
      avatar: 'assets/img/avatars/te3.jpg'
    }
  ];
}
