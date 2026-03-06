import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-what-we-do',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">

      <!-- IMAGES — right side on desktop -->
      <div class="col-lg-6 order-lg-2">
        <div class="row gx-md-5 gy-5" data-cues="fadeIn" data-group="images">
          <div class="col-md-4 offset-md-2 align-self-end">
            <figure class="rounded shadow-lg">
              <img src="assets/images/hero/HRMS.png" alt="HRMS System">
            </figure>
          </div>
          <div class="col-md-6 align-self-end">
            <figure class="rounded shadow-lg">
              <img src="assets/images/hero/banner.png" alt="Web Development">
            </figure>
          </div>
          <div class="col-md-6 offset-md-1">
            <figure class="rounded shadow-lg">
              <img src="assets/images/hero/NICTUS.png" alt="NICTUS">
            </figure>
          </div>
          <div class="col-md-4 align-self-start">
            <figure class="rounded shadow-lg">
              <img src="assets/images/hero/warehouse.png" alt="Warehouse System">
            </figure>
          </div>
        </div>
      </div>

      <!-- TEXT + SERVICES — left side -->
      <div class="col-lg-6">
        <h2 class="display-4 mb-3">What We Do?</h2>
        <p class="lead fs-lg mb-8 pe-xxl-2">
          Our full services are <span class="underline">specifically designed</span>
          to meet your digital transformation needs and business goals.
        </p>
        <div class="row gx-xl-10 gy-6" data-cues="slideInUp" data-group="services">
          <div class="col-md-6 col-lg-12 col-xl-6" *ngFor="let service of services">
            <div class="d-flex flex-row">
              <div>
                <div class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-5">
                  <i [class]="service.icon"></i>
                </div>
              </div>
              <div>
                <h4 class="mb-1">{{ service.title }}</h4>
                <p class="mb-0">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `
})
export class WhatWeDoComponent {
  services = [
    {
      icon: 'uil uil-desktop',
      title: 'Web Development',
      description: 'Custom, responsive websites and web apps built for performance and growth.'
    },
    {
      icon: 'uil uil-mobile-android',
      title: 'Mobile App Development',
      description: 'Native and cross-platform apps for iOS and Android platforms.'
    },
    {
      icon: 'uil uil-chart-bar',
      title: 'ERP & Business Applications',
      description: 'Enterprise software solutions that streamline your operations end-to-end.'
    },
    {
      icon: 'uil uil-chart-line',
      title: 'Digital Marketing & SEO',
      description: 'Data-driven strategies to grow your online presence and drive conversions.'
    }
  ];
}