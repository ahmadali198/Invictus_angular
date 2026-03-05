import { Component, AfterViewInit } from '@angular/core';
import { HeroComponent }        from './components/hero/hero.component';
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
    HeroComponent,
    StatsComponent,
    WhatWeDoComponent,
    HowWeDoItComponent,
    TestimonialsComponent,
    ProjectsComponent,
    ClientsComponent,
    CtaComponent
  ],
  template: `
    <app-hero></app-hero>

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
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Re-initialise Sandbox counters, swipers, scroll cues after Angular renders
    setTimeout(() => {
      const w = window as any;
      w.theme?.init?.();
      // Re-run scroll cue animations
      document.querySelectorAll('[data-cue]').forEach(el => {
        el.classList.remove('animated');
      });
    }, 100);
  }
}
