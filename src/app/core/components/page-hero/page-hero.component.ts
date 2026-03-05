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
      <div class="container pt-17 pb-19 pt-md-19 pb-md-20 text-center">
        <div class="row">
          <div class="col-lg-8 mx-auto">

            <!-- Page title (inner pages: just title + breadcrumb) -->
            <ng-container *ngIf="subtitle">
              <h2 class="h6 text-uppercase ls-xl text-white mb-5">{{ subtitle }}</h2>
            </ng-container>

            <h1 class="display-1 text-white mb-3">{{ title }}</h1>

            <!-- Breadcrumb (shown on inner pages) -->
            <nav *ngIf="breadcrumb" class="d-inline-block" aria-label="breadcrumb">
              <ol class="breadcrumb text-white">
                <li class="breadcrumb-item"><a href="/" style="color:#fff">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ breadcrumb }}</li>
              </ol>
            </nav>

            <!-- CTA buttons (home page only) -->
            <ng-container *ngIf="showCta">
              <div class="hero-btns mt-5">
                <a href="/contact" class="btn btn-lg btn-white rounded-pill px-6">Get a Quote</a>
                <a href="assets/media/movie.mp4"
                   class="btn btn-circle btn-white btn-play ripple ms-3"
                   data-glightbox>
                  <i class="icn-caret-right"></i>
                </a>
              </div>
            </ng-container>

          </div>
        </div>
      </div>
    </section>
  `
})
export class PageHeroComponent implements AfterViewInit {
  /** Background image path e.g. 'assets/img/photos/bg2.jpg' */
  @Input() imageSrc = 'assets/img/photos/bg2.jpg';

  /** Main heading */
  @Input() title = '';

  /** Small subtitle above heading (optional) */
  @Input() subtitle = '';

  /** Breadcrumb label — shows breadcrumb row when set */
  @Input() breadcrumb = '';

  /** Show Get a Quote + play CTA buttons (home only) */
  @Input() showCta = false;

  /** Overlay strength class e.g. 'bg-overlay-300', 'bg-overlay-400' */
  @Input() overlayClass = 'bg-overlay-400';

  ngAfterViewInit(): void {
    // Re-trigger Sandbox JS to process data-image-src on every route
    setTimeout(() => {
      (window as any).theme?.init?.();
    }, 50);
  }
}