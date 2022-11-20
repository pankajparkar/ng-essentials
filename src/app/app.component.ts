import { Component } from '@angular/core';
import { UserDetailsComponent } from "./user-details/user-details.component";

@Component({
  standalone: true,
  selector: 'ne-root',
  template: `
    <h1>{{title}}</h1>
    <ne-user-details></ne-user-details>
  `,
  styles: [`

  `],
  imports: [UserDetailsComponent]
})
export class AppComponent {
  title = 'ng-essentials';
}
