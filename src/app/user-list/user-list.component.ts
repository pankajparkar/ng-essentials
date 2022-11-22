import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ApiService } from '../services/api.service';

@Component({
  standalone: true,
  selector: 'ne-user-list',
  template: `
    <h2>Post List</h2>
    <table *ngIf="!selectedPost">
      <thead>
        <tr>
          <td>Id</td>
          <td>Title</td>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let post of posts$ | async" [routerLink]="['/user/details', post.id]">
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
    NgIf,
    RouterLink,
  ]
})
export class UserListComponent {

  selectedPost: any;
  readonly apiService = inject(ApiService);
  posts$ = this.apiService.getPosts();
}
