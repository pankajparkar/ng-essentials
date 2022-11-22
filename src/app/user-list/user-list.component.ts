import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ApiService } from '../services/api.service';

@Component({
  standalone: true,
  selector: 'ne-user-list',
  template: `
    <h2>Post List</h2>
    <table class="posts" *ngIf="!selectedPost">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
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
    .posts {
      border-collapse: collapse;
      width: 100%;
    }

    .posts td, .posts th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    .posts tr:nth-child(even){background-color: #f2f2f2;}

    .posts tr:hover {background-color: #ddd;}

    .posts th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04AA6D;
      color: white;
    }
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
