import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-gh-search-engine',
  templateUrl: './gh-search-engine.component.html',
  styleUrls: ['./gh-search-engine.component.css']
})
export class GhSearchEngineComponent implements OnInit {

  APP_TITLE : string;
  SEARCH_ENGINE_REPO_NAME_TITLE : string;
  SEARCH_ENGINE_BUTTON_TITLE : string;

  constructor() { 
    this.APP_TITLE = AppConstants.APP_TITLE;
    this.SEARCH_ENGINE_REPO_NAME_TITLE = AppConstants.SEARCH_ENGINE_REPO_NAME_TITLE;
    this.SEARCH_ENGINE_BUTTON_TITLE = AppConstants.SEARCH_ENGINE_BUTTON_TITLE;
  }

  ngOnInit() { 
  }

}
