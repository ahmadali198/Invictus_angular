import { Component, Input, AfterViewInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [NgIf],
  template: `
    <section class="wrapper image-wrapper bg-image bg-overlay text-white"
             [class]="overlayClass"
             [attr.data-image-src]="imageSrc">

      <!-- HOME HERO -->
      <ng-container *ngIf="showCta">
        <div class="container pt-18 pb-20 pt-md-20 pb-md-21 text-center">
          <div class="row">
            <div class="col-md-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto"
                 data-cues="zoomIn" data-group="page-title" data-interval="-200">
              <h2 class="fs-16 text-uppercase ls-xl text-white fw-bold mb-5">{{ subtitle }}</h2>
              <h1 class="display-1 fs-56 text-white fw-bolder mb-7 lh-sm">{{ title }}</h1>
              <div class="d-flex justify-content-center mt-2">
                <a href="assets/media/movie.mp4"
                   class="btn btn-circle btn-white btn-play ripple"
                   style="width:72px; height:72px; font-size:24px;"
                   data-glightbox>
                  <i class="icn-caret-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ng-container>

      <!-- INNER PAGE HERO -->
      <ng-container *ngIf="!showCta">
        <div class="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1 class="display-1 text-white mb-3">{{ title }}</h1>
              <nav *ngIf="breadcrumb" class="d-inline-block" aria-label="breadcrumb">
                <ol class="breadcrumb text-white">
                  <li class="breadcrumb-item"><a href="/" style="color:#fff">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">{{ breadcrumb }}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </ng-container>

    </section>
  `
})
export class PageHeroComponent implements AfterViewInit {
  @Input() imageSrc = 'assets/img/photos/bg2.jpg';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() breadcrumb = '';
  @Input() showCta = false;
  @Input() overlayClass = 'bg-overlay-400';

  ngAfterViewInit(): void {
    setTimeout(() => { (window as any).theme?.init?.(); }, 50);
  }
}