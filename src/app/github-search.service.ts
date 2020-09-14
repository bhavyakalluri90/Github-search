import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private gitHubUrl = 'https://api.github.com/search/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(searchParam: string,page: number,pageSize:number){
    return this.http.get(`${this.gitHubUrl}?q=${searchParam}&per_page=${pageSize}&page=${page}`)
  }
  getDataFromUrl(urlString: string){
    return this.http.get(`${urlString}`)
  }
}
