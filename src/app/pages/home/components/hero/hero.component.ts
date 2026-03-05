import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white"
             data-image-src="assets/img/photos/bg2.jpg">
      <div class="container pt-17 pb-19 pt-md-19 pb-md-20 text-center">
        <div class="row mb-11">
          <div class="col-md-9 col-lg-7 col-xxl-6 mx-auto"
               data-cues="zoomIn" data-group="page-title" data-interval="-200">
            <h2 class="h6 text-uppercase ls-xl text-white mb-5">Hello! This is Invictus Solutions</h2>
            <h3 class="display-1 text-white mb-7">We bring innovative digital solutions for your business</h3>
            <div class="hero-btns">
              <a routerLink="/contact" class="btn btn-lg btn-white rounded-pill px-6">Get a Quote</a>
              <a href="assets/media/movie.mp4"
                 class="btn btn-circle btn-white btn-play ripple"
                 data-glightbox>
                <i class="icn-caret-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
