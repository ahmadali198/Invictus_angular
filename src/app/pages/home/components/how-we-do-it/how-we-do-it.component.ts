import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-how-we-do-it',
  standalone: true,
  imports: [NgFor],
  template: `
    <h2 class="display-4 mb-3">How We Do It?</h2>
    <p class="lead fs-lg mb-8">
      We make your project <span class="underline">stress-free</span> with a clear, proven delivery process.
    </p>
    <div class="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line"
         data-cues="slideInUp" data-group="process">
      <div class="col-md-6 col-lg-3" *ngFor="let step of steps; let i = index">
        <span class="icon btn btn-circle btn-lg pe-none mb-4"
              [class]="i === 1 ? 'btn-primary' : 'btn-soft-primary'">
          <span class="number">{{ step.number }}</span>
        </span>
        <h4 class="mb-1">{{ step.title }}</h4>
        <p>{{ step.description }}</p>
      </div>
    </div>
  `
})
export class HowWeDoItComponent {
  steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We listen carefully to understand your goals, audience, and challenges before writing a single line of code.'
    },
    {
      number: '02',
      title: 'Strategy & Design',
      description: 'Our team creates a tailored roadmap and UI/UX prototypes perfectly aligned to your brand vision.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'We build clean, scalable, well-documented solutions using the latest technologies and best practices.'
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'We deploy your product and provide ongoing maintenance to ensure lasting performance and success.'
    }
  ];
}
