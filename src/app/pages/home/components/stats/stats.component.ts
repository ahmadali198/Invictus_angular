import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="row">
      <div class="col-12 mt-n20">
        <figure class="rounded">
          <img src="assets/img/photos/about5.jpg" alt="Invictus Solutions Team">
        </figure>
        <div class="row" data-cue="slideInUp">
          <div class="col-xl-10 mx-auto">
            <div class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-300 text-white
                        mt-n5 mt-lg-0 mt-lg-n50p mb-lg-n50p border-radius-lg-top"
                 data-image-src="assets/img/photos/bg2.jpg">
              <div class="card-body p-9 p-xl-10">
                <div class="row align-items-center counter-wrapper gy-4 text-center">
                  <div class="col-6 col-lg-3" *ngFor="let stat of stats">
                    <h3 class="counter counter-lg text-white">{{ stat.value }}</h3>
                    <p>{{ stat.label }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class StatsComponent {
  stats = [
    { value: 500, label: 'Completed Projects'  },
    { value: 300, label: 'Satisfied Clients'   },
    { value: 50,  label: 'Expert Professionals' },
    { value: 10,  label: 'Years of Experience'  }
  ];
}
