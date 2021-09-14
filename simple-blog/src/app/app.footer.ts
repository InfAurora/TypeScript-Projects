import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:  `
  <div class="container" style="padding-top: 15%">
  <div class="row">
    <div class="col">
      <div class="col-12" class="text-center">
        <footer>
          <p class="text-center">Copyright
            2021 © "Simple Blog" All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  </div>
</div>

`,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'simple-blog';
}