import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getPosts() {
    return this.http.get<any[]>(API_URL)
  }

  getPost(id: number) {
    return this.http.get<any[]>(`${API_URL}/${id}`)
  }
}
