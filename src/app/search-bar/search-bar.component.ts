import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  @Output() searchClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  searchParam :string = "";
  result :string = "";

  ngOnInit(): void { }
  
  search(e){
    this.searchClicked.emit(this.searchParam);
  }

}
