import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'ne-user-edit',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    NgIf,
  ],
  template: `
    <h2>Post</h2>
    <form class="post" *ngIf="selectedPost$ | async as selectedPost" novalidate (ngSubmit)="submit()">
      <div class="form-control">
        <label>
          Id:
        </label>
         <input name="id" type="text" readonly [ngModel]="selectedPost.id">
      </div>
      <div class="form-control">
        <label>
          Title:
        </label>
         <input name="name" type="text" [ngModel]="selectedPost.title">
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  `,
  styles: [
    `
    .post {
      padding: 0 12px;
    }
    .cancel {
      margin-left: 10px
    }
    .form-control {
      margin: 8px 0;
    }
    `
  ]
})
export class UserEditComponent {
  readonly apiService = inject(ApiService);
  readonly route = inject(ActivatedRoute);
  readonly router = inject(Router);
  selectedPost$: Observable<any> = this.apiService.getPost(
    this.route.snapshot.params['id']
  );

  submit() {
    // TODO: API Post
    this.router.navigate(['/user/details', this.route.snapshot.params['id']]);
  }
}
