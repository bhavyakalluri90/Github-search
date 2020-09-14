import { Component, OnInit, Input } from '@angular/core';
import { GithubSearchService } from '../github-search.service';
import {
  animate,
  style,
  transition,
  trigger,
  state
} from "@angular/animations";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less'],
  animations: [
    trigger('expandInOut', [
      state('in', style({
        overflow: 'hidden',
        height: '*',
        width: '*'
      })),
      state('out', style({
        overflow: 'hidden',
        height: '700px',
        width: '900px'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})
export class UserCardComponent implements OnInit {
  
  constructor(private githubService: GithubSearchService) { }
  @Input() user: any;
  userOrganization

  helpMenuOpen: string = 'in';
  ngOnInit(): void {
    this.user.isExpanded = false;
  }
  navigateToUrl(url){
    window.open(url, "_blank");
  }
  expandUser(user){
    this.helpMenuOpen = user.isExpanded ? 'in': 'out';
    if(!user.isExpanded){
      this.githubService.getDataFromUrl(user.repos_url).subscribe((response: any)=>{
        user.reposData = response;
        user.displayedColumns = ['name','open_issues', 'watchers', 'private'];
        console.log(response);
      })
    }
    user.isExpanded = !user.isExpanded;
  }

}
