import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ne-root',
  template: `
    <h1>{{title}}</h1>
  `,
  styles: [`
  `]
})
export class AppComponent {
  title = 'ng-essentials';
}
