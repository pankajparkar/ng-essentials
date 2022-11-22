import { Component, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { ApiService } from '../services/api.service';
import { map, Observable } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'ne-user-details',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    RouterLink
  ],
  template: `
    <div *ngIf="selectedPost$ | async as selectedPost">
      <div>{{selectedPost.id}}</div>
      <div>{{selectedPost.title}}</div>
      <button type="button" [routerLink]="['/user/edit', selectedPost.id]">
        Edit
      </button>
      <button type="button" routerLink="/user/list">
        Cancel
      </button>
    </div>
  `,
  styles: [
    `
    `
  ]
})
export class UserDetailsComponent {

  readonly apiService = inject(ApiService);
  readonly route = inject(ActivatedRoute);
  selectedPost$: Observable<any> = this.apiService.getPost(this.route.snapshot.params['id']);
}
