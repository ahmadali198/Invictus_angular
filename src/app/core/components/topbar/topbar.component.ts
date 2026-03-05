import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  template: `
    <div class="inv-topbar">
      <div class="container">
        <div class="tb-wrap">
          <div>
            <a href="privacy-policy">Privacy Policy</a>
            <span class="tb-divider">|</span>
            <a href="#">Visit our social pages</a>
          </div>
          <div class="tb-social">
            <a href="https://facebook.com" target="_blank"><i class="uil uil-facebook-f"></i></a>
            <a href="https://twitter.com"  target="_blank"><i class="uil uil-twitter"></i></a>
            <a href="https://instagram.com" target="_blank"><i class="uil uil-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class TopbarComponent {}
