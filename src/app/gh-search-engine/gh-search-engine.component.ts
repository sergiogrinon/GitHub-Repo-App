import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';
import { AppServiceService } from "../app-service.service"
import { Config } from 'protractor';

@Component({
  selector: 'app-gh-search-engine',
  templateUrl: './gh-search-engine.component.html',
  styleUrls: ['./gh-search-engine.component.css']
})
export class GhSearchEngineComponent implements OnInit {

  APP_TITLE : string;
  SEARCH_ENGINE_REPO_NAME_TITLE : string;
  SEARCH_ENGINE_BUTTON_TITLE : string;
  repoName : string = 'Angular';
  reposData : Config;
  isLoading : boolean = false;
  rowObjectsList = new Array;

  constructor(private appService: AppServiceService) { 
    this.APP_TITLE = AppConstants.APP_TITLE;
    this.SEARCH_ENGINE_REPO_NAME_TITLE = AppConstants.SEARCH_ENGINE_REPO_NAME_TITLE;
    this.SEARCH_ENGINE_BUTTON_TITLE = AppConstants.SEARCH_ENGINE_BUTTON_TITLE;
  }

  ngOnInit() {
  }

  
  searchResults() {
    this.isLoading = true;
    this.appService.getGitHubApiData(this.repoName).toPromise().then(response => {
      this.reposData = response;
      this.generateRowObjectsWithResponseData(this.reposData.items);
      console.log(this.rowObjectsList);
      console.log(this.reposData);
      this.isLoading = false;
    });
  }

  generateRowObjectsWithResponseData(data : any) {
    for(let i = 0; i < data.length; i++) {
      var rowObject = new Object();
      rowObject['name'] = data[i].name;
      rowObject['forks'] = data[i].forks;
      rowObject['openIssues'] = data[i].open_issues;
      rowObject['watchers'] = data[i].watchers;
      rowObject['avatarUrl'] = data[i].owner.avatar_url;

      this.rowObjectsList.push(rowObject);
    }
  }

}
