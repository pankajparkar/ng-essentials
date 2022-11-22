import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  standalone: true,
  selector: 'ne-root',
  template: `
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
  ]
})
export class AppComponent {

  selectedPost: any;
  readonly apiService = inject(ApiService);
  posts$ = this.apiService.getPosts();
}
