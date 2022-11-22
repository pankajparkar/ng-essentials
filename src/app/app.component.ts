import { AsyncPipe, JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  standalone: true,
  selector: 'ne-root',
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
        <tr *ngFor="let post of posts$ | async" (click)="select(post)">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
        </tr>
      </tbody>
    </table>
    <div *ngIf="selectedPost">
      <div>{{selectedPost.id}}</div>
      <div>{{selectedPost.title}}</div>

      <button type="button" (click)="cancel()">Cancel</button>
    </div>
  `,
  styles: [`

  `],
  imports: [
    JsonPipe,
    NgForOf,
    AsyncPipe,
    NgIf,
  ]
})
export class AppComponent {

  selectedPost: any;
  readonly apiService = inject(ApiService);
  posts$ = this.apiService.getPosts();

  cancel() {
    this.selectedPost = undefined;
  }

  select(post: any) {
    this.selectedPost = post;
  }
}
