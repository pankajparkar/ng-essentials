import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgForOf, NgIf } from '@angular/common';
import { ApiService } from '../services/api.service';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'ne-user-details',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    RouterLink,
    NgForOf
  ],
  template: `
    <div *ngIf="selectedPost$ | async as selectedPost" class="post">
      <h3>Post Details</h3>
      <div>{{selectedPost.title}}</div>
      <h3>Comments</h3>
      <ul>
        <li *ngFor="let comment of comments">
          {{ comment.name }}
        </li>
      </ul>
      <button type="button" [routerLink]="['/user/edit', selectedPost.id]">
        Edit
      </button>
      <button class="cancel" type="button" routerLink="/user/list">
        Cancel
      </button>
    </div>
  `,
  styles: [
    `
    .post {
      padding: 12px;
    }
    .cancel {
      margin-left: 10px
    }
    `
  ]
})
export class UserDetailsComponent {

  readonly apiService = inject(ApiService);
  readonly route = inject(ActivatedRoute);
  selectedPost$: Observable<any> = this.apiService.getPost(this.route.snapshot.params['id']);
  comments: any[] = [];

  ngOnInit() {
    this.apiService.getCompmentsByPostId(this.route.snapshot.params['id'])
      .subscribe((comments) => {
        this.comments = comments;
      });
  }

}
