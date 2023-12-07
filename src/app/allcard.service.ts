import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { allcardInterface } from 'src/allcard';

@Injectable({
  providedIn: 'root'
})
export class AllcardService {

  constructor(private http:HttpClient) { }

  getAllnews() {
    return this.http.get<any>('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a398c320c8dd43a8a7f0ee35dc074bd3')
    .pipe(map(response => response.articles));
  }
}
