import { Injectable } from '@angular/core';
import { AppConstants } from './app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  REPOS_SEARCH_URL : string;

  constructor(private http: HttpClient) { 
    this.REPOS_SEARCH_URL = AppConstants.REPOS_SEARCH_URL;
  }

  getGitHubApiData(repoName : string) {
    return this.http.get(this.REPOS_SEARCH_URL + repoName);
  }
}
