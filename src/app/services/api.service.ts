import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getPosts() {
    return this.http.get<any[]>(`${API_URL}/posts`)
  }

  getPost(id: number) {
    return this.http.get<any[]>(`${API_URL}/posts/${id}`)
  }

  getCompmentsByPostId(postId: number) {
    return this.http.get<any[]>(`${API_URL}/comments`, { params: { postId } })
  }
}
