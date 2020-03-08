import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppConstants } from '../app.constants';

@Component({
  selector: 'app-results-grid',
  templateUrl: './results-grid.component.html',
  styleUrls: ['./results-grid.component.css']
})
export class ResultsGridComponent implements OnInit {
  resultsList : Array<Object>;
  showGridList : boolean;
  AVATAR_IMG_TITLE : string;
  NAME_TITLE : string;
  FORKS_TITLE : string;
  WATCHERS_TITLE : string;
  OPEN_ISSUES_TITLE : string;

  constructor(private appComponent: AppComponent) { 
    this.AVATAR_IMG_TITLE = AppConstants.AVATAR_IMG_TITLE;
    this.NAME_TITLE = AppConstants.NAME_TITLE;
    this.FORKS_TITLE = AppConstants.FORKS_TITLE;
    this.WATCHERS_TITLE = AppConstants.WATCHERS_TITLE;
    this.OPEN_ISSUES_TITLE = AppConstants.OPEN_ISSUES_TITLE;
  }

  ngOnInit() {
    this.resultsList = this.appComponent.resultLis;
    this.showGridList = this.appComponent.showResultGrid;
  }

}
