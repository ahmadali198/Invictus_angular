import { Component, AfterViewInit } from '@angular/core';
import { PageHeroComponent } from '../../core/components/page-hero/page-hero.component';
import { StatsComponent }       from './components/stats/stats.component';
import { WhatWeDoComponent }    from './components/what-we-do/what-we-do.component';
import { HowWeDoItComponent }   from './components/how-we-do-it/how-we-do-it.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ProjectsComponent }    from './components/projects/projects.component';
import { ClientsComponent }     from './components/clients/clients.component';
import { CtaComponent }         from './components/cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PageHeroComponent,
    StatsComponent,
    WhatWeDoComponent,
    HowWeDoItComponent,
    TestimonialsComponent,
    ProjectsComponent,
    ClientsComponent,
    CtaComponent
  ],
  template: `
    <app-page-hero
      imageSrc="assets/img/photos/bg2.jpg"
      title="We bring innovative digital solutions for your business"
      subtitle="Hello! This is Invictus Solutions"
      overlayClass="bg-overlay-300"
      [showCta]="true">
    </app-page-hero>

    <section class="wrapper bg-light angled upper-end lower-end">
      <div class="container pb-14 pb-md-16">
        <app-stats></app-stats>
        <app-what-we-do></app-what-we-do>
        <app-how-we-do-it></app-how-we-do-it>
      </div>
    </section>

    <app-testimonials></app-testimonials>
    <app-projects></app-projects>
    <app-clients></app-clients>
    <app-cta></app-cta>
  `
})
export class HomeComponent {}