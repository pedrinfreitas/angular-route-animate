import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { slider } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // fader,
    slider,
    // transformer,
  ],
})
export class AppComponent {
  title = 'screen-transition';

  prepareRoute(outlet: RouterOutlet) {
    console.log(outlet.activatedRouteData['animation']);

    return (
      outlet &&
      outlet?.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
