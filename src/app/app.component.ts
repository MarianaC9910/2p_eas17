import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  template: `<ion-app><router-outlet></router-outlet></ion-app>`,
  imports: [IonApp, IonRouterOutlet, IonicModule, RouterOutlet],
})
export class AppComponent {
  constructor() {}
}
