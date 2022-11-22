import { JsonPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

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
        <tr *ngFor="let post of posts">
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
    NgForOf
  ]
})
export class AppComponent {
  posts: any[] = [
    {
      id: 'asdf',
      title: 'Title 1',
      description: 'Description 1',
    },
    {
      id: 'asds',
      title: 'Title 2',
      description: 'Description 1',
    },
  ];
}
