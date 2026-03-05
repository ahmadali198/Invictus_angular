import { Component} from '@angular/core';
import { PageHeroComponent } from '../../core/components/page-hero/page-hero.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf, PageHeroComponent],
  template: `

    <app-page-hero
      imageSrc="assets/img/photos/bg3.jpg"
      title="Get in Touch"
      breadcrumb="Contact"
      overlayClass="bg-overlay-400">
    </app-page-hero>

    <!-- OFFICES + FORM -->
    <section class="wrapper bg-light angled upper-end">
      <div class="container pb-11">

        <!-- INTRO -->
        <div class="row mb-10 text-center">
          <div class="col-lg-8 mx-auto mt-14">
            <h2 class="display-4 mb-3">Reach Out to Us</h2>
            <p class="lead mb-2">Reach out to us in the nearest office.</p>
            <p class="mb-0">
              <i class="uil uil-phone text-primary me-2"></i>
              <strong>+92 (041) 2408084</strong>
            </p>
          </div>
        </div>

        <!-- OFFICE CARDS -->
        <div class="row gy-6 mb-14 mb-md-16">

          <!-- Head Office -->
          <div class="col-md-6 col-lg-3" data-cue="slideInUp">
            <div class="card h-100 shadow-sm">
              <div class="card-body p-7">
                <span class="badge rounded-pill mb-3"
                      style="background:#6f42c1; color:#fff;">Head Office</span>
                <h5 class="mb-1 text-dark">Faisalabad</h5>
                <hr class="my-3">
                <div class="d-flex flex-row mb-2">
                  <i class="uil uil-phone text-primary fs-20 me-3 mt-1"></i>
                  <div>
                    <p class="mb-0 text-body">+92 (041) 2408084</p>
                    <p class="mb-0 text-body">+92 300 0880001</p>
                  </div>
                </div>
                <div class="d-flex flex-row mb-2">
                  <i class="uil uil-envelope text-primary fs-20 me-3 mt-1"></i>
                  <p class="mb-0">
                    <a href="mailto:info@invictussolutions.co" class="link-body text-body">info&#64;invictussolutions.co</a>
                  </p>
                </div>
                <div class="d-flex flex-row">
                  <i class="uil uil-location-pin-alt text-primary fs-20 me-3 mt-1"></i>
                  <p class="mb-0 text-body">101, Regency Arcade, The Mall, Faisalabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Development Office -->
          <div class="col-md-6 col-lg-3" data-cue="slideInUp" data-delay="100">
            <div class="card h-100 shadow-sm">
              <div class="card-body p-7">
                <span class="badge rounded-pill mb-3"
                      style="background:#e8dff5; color:#6f42c1;">Development Office</span>
                <h5 class="mb-1 text-dark">Faisalabad</h5>
                <hr class="my-3">
                <div class="d-flex flex-row mb-2">
                  <i class="uil uil-phone text-primary fs-20 me-3 mt-1"></i>
                  <p class="mb-0 text-body">+92 300 0880001</p>
                </div>
                <div class="d-flex flex-row mb-2">
                  <i class="uil uil-envelope text-primary fs-20 me-3 mt-1"></i>
                  <p class="mb-0">
                    <a href="mailto:info@invictussolutions.co" class="link-body text-body">info&#64;invictussolutions.co</a>
                  </p>
                </div>
                <div class="d-flex flex-row">
                  <i class="uil uil-location-pin-alt text-primary fs-20 me-3 mt-1"></i>
                  <p class="mb-0 text-body">102-C, Peoples Colony # 1, D-Ground, Faisalabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sub Office Lahore -->
          <div class="col-md-6 col-lg-3" data-cue="slideInUp" data-delay="200">
            <div class="card h-100 shadow-sm">
              <div class="card-body p-7">
                <span class="badge rounded-pill mb-3"
                      style="background:#e8dff5; color:#6f42c1;">Sub Office</span>
                <h5 class="mb-1 text-dark">Lahore</h5>
                <hr class="my-3">
                <div class="d-flex flex-row mb-2">
                  <i class="uil uil-phone text-primary fs-20 me-3 mt-1"></i>
                  <p class="mb-0 text-body">+92 300 0880001</p>
                </div>
                <div class="d-flex flex-row mb-2">
                  <i class="uil uil-envelope text-primary fs-20 me-3 mt-1"></i>
                  <p class="mb-0">
                    <a href="mailto:info@invictussolutions.co" class="link-body text-body">info&#64;invictussolutions.co</a>
                  </p>
                </div>
                <div class="d-flex flex-row">
                  <i class="uil uil-location-pin-alt text-primary fs-20 me-3 mt-1"></i>
                  <p class="mb-0 text-body">Office # 1101, 1102, 11th Floor, Tricon Corporate Office, Block H, Gulberg II, Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Sub Office USA -->
          <div class="col-md-6 col-lg-3" data-cue="slideInUp" data-delay="300">
            <div class="card h-100 shadow-sm">
              <div class="card-body p-7">
                <span class="badge rounded-pill mb-3"
                      style="background:#e8dff5; color:#6f42c1;">Sub Office</span>
                <h5 class="mb-1 text-dark">USA</h5>
                <hr class="my-3">
                <div class="d-flex flex-row mb-2">
                  <i class="uil uil-envelope text-primary fs-20 me-3 mt-1"></i>
                  <p class="mb-0">
                    <a href="mailto:info@invictussolutions.co" class="link-body text-body">info&#64;invictussolutions.co</a>
                  </p>
                </div>
                <div class="d-flex flex-row">
                  <i class="uil uil-location-pin-alt text-primary fs-20 me-3 mt-1"></i>
                  <p class="mb-0 text-body">1659 Scott Blvd. Suite 255 Santa Clara, CA 95050</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- CONTACT FORM -->
        <div class="row">
          <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <h2 class="display-4 mb-3 text-center">Drop Us a Line</h2>
            <p class="lead text-center mb-10">
              Reach out to us from our contact form and we will get back to you shortly.
            </p>
            <div class="row gx-4">
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_name" type="text" class="form-control"
                         placeholder="Jane" [(ngModel)]="form.firstName">
                  <label for="form_name">First Name *</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_lastname" type="text" class="form-control"
                         placeholder="Doe" [(ngModel)]="form.lastName">
                  <label for="form_lastname">Last Name *</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-4">
                  <input id="form_email" type="email" class="form-control"
                         placeholder="jane.doe@example.com" [(ngModel)]="form.email">
                  <label for="form_email">Email *</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-select-wrapper mb-4">
                  <select class="form-select" id="form-select" [(ngModel)]="form.service">
                    <option selected disabled value="">Select a department</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>ERP & Business Applications</option>
                    <option>UI/UX Design</option>
                    <option>Digital Marketing & SEO</option>
                    <option>Agentic AI Solutions</option>
                    <option>Training Program</option>
                  </select>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating mb-4">
                  <textarea id="form_message" class="form-control"
                            placeholder="Your message" style="height:150px"
                            [(ngModel)]="form.message"></textarea>
                  <label for="form_message">Message *</label>
                </div>
              </div>
              <div class="col-12 text-center">
                <button class="btn btn-primary rounded-pill btn-send mb-3"
                        (click)="submitForm()">Send message</button>
                <p class="text-muted"><strong>*</strong> These fields are required.</p>
                <div class="alert alert-success mt-3" *ngIf="submitted">
                  <i class="uil uil-check-circle me-2"></i>
                  Thank you! We'll get back to you shortly.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- STATS -->
    <section class="wrapper image-wrapper bg-auto no-overlay bg-image text-center bg-map"
             style="background-image: url('assets/img/map.png'); background-size: auto; background-repeat: no-repeat; background-position: center;">
      <div class="container pt-0 pb-14 pt-md-16 pb-md-18">
        <div class="row">
          <div class="col-lg-9 col-xxl-8 mx-auto">
            <h3 class="display-4 mb-8 px-xl-12">
              We are trusted by over 300+ clients. Join them now and grow your business.
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 col-lg-9 col-xl-7 mx-auto">
            <div class="row align-items-center counter-wrapper gy-4 gy-md-0">
              <div class="col-md-4 text-center">
                <h3 class="counter counter-lg text-primary">500</h3>
                <p>Completed Projects</p>
              </div>
              <div class="col-md-4 text-center">
                <h3 class="counter counter-lg text-primary">300</h3>
                <p>Satisfied Clients</p>
              </div>
              <div class="col-md-4 text-center">
                <h3 class="counter counter-lg text-primary">50</h3>
                <p>Expert Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  `,
  styles: [`
    .card { color: #343f52 !important; }
    .card p, .card address { color: #60697b !important; }
  `]
})
export class ContactComponent {
  submitted = false;
  form = { firstName: '', lastName: '', email: '', service: '', message: '' };


  submitForm(): void {
    if (!this.form.firstName || !this.form.email || !this.form.message) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log('Form submitted:', this.form);
    this.submitted = true;
    this.form = { firstName: '', lastName: '', email: '', service: '', message: '' };
  }
}