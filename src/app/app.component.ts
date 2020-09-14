import { Component } from '@angular/core';
import { GithubSearchService } from './github-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  userData: Array<object>;
  currentSearchString: string = "";
  partialResult: boolean = false;
  user: object;
  currentPage:number = 0;
  totalUsersCount = 0;
  pageSize = 50;
  totalPages: number = 0;
  constructor(private githubService: GithubSearchService) { }
  onSearchClicked(searchString){
    console.log(searchString);
    this.currentSearchString = searchString;
    this.githubService.getUsers(searchString,this.currentPage,this.pageSize).subscribe((response: any)=>{
      this.userData = response.items;
      this.totalUsersCount = response.total_count;
      this.totalPages = Math.floor(this.totalUsersCount/this.pageSize);
      this.partialResult = response.incomplete_results;
      console.log(this.userData);
    })
  }
  handlePaginationEvents(pageInfo){
    this.currentPage = pageInfo.pageIndex + 1;
    this.pageSize = pageInfo.pageSize;
    this.onSearchClicked(this.currentSearchString);
  }
}
