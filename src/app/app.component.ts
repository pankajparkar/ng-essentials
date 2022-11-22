import { AsyncPipe, JsonPipe, NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  standalone: true,
  selector: 'ne-root',
  template: `
    <h2>Post List</h2>
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Title</td>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let post of posts$ | async">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`

  `],
  imports: [
    JsonPipe,
    NgForOf,
    AsyncPipe,
  ]
})
export class AppComponent {
  readonly apiService = inject(ApiService);

  posts$ = this.apiService.getPosts();
}
