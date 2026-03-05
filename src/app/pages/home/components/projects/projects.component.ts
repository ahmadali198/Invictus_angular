import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <section class="wrapper bg-light">
      <div class="container py-14 py-md-16">
        <div class="row align-items-center mb-7">
          <div class="col-md-8 col-lg-8 col-xl-7 col-xxl-6 pe-lg-17">
            <h2 class="display-4 mb-3">Recent Projects</h2>
            <p class="lead fs-lg">We love to turn ideas into <span class="underline">powerful digital products</span>.</p>
          </div>
          <div class="col-md-4 col-lg-4 text-md-end mt-4 mt-md-0">
            <a routerLink="/portfolio" class="btn btn-outline-primary rounded-pill">View All Projects</a>
          </div>
        </div>
        <div class="projects-tiles">
          <div class="project grid grid-view">
            <div class="row gx-md-8 gx-xl-12 gy-10 gy-md-12 isotope" data-cue="slideInUp">
              <div *ngFor="let project of projects; let i = index"
                   class="item"
                   [class]="i % 2 === 0 ? 'col-md-5' : 'col-md-7 mt-md-17'">
                <figure class="lift rounded mb-6">
                  <a routerLink="/portfolio">
                    <img [src]="project.image" [alt]="project.title">
                  </a>
                </figure>
                <div class="post-category mb-2" [style.color]="project.color">{{ project.category }}</div>
                <h3 class="post-title">{{ project.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  projects = [
    {
      image: 'assets/img/photos/rp1.jpg',
      category: 'Enterprise Software',
      title: 'ERP System Development',
      color: '#6f42c1'
    },
    {
      image: 'assets/img/photos/rp2.jpg',
      category: 'HR Technology',
      title: 'HRMS — Human Resource Management',
      color: '#f7961c'
    },
    {
      image: 'assets/img/photos/rp3.jpg',
      category: 'Supply Chain',
      title: 'Supply Connect — Warehouse Management',
      color: '#e2626b'
    }
  ];
}
