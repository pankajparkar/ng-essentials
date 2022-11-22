import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { NavbarComponent } from "./shared/navbar/navbar.component";

@Component({
  standalone: true,
  selector: 'ne-root',
  template: `
    <ne-navbar></ne-navbar>
    <router-outlet></router-outlet>
  `,
  styles: [`

  `],
  imports: [
    JsonPipe,
    NgForOf,
    AsyncPipe,
    NgIf,
    RouterOutlet,
    NavbarComponent,
  ]
})
export class AppComponent {

  selectedPost: any;
  readonly apiService = inject(ApiService);
  posts$ = this.apiService.getPosts();
}
