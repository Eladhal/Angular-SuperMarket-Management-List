import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-no-search-results',
  templateUrl: './no-search-results.component.html',
  styleUrls: ['./no-search-results.component.css']
})
export class NoSearchResultsComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.InitNavStatus();
  }

  private InitNavStatus() {
    const navstatus: navStatus = {  // Update the navigation bar
      _topNav:{
        addBtn: false,
        searchBtn: true,
        editBtn: false,
        deleteBtn: false
      },
      _bottomNav:{
        showNav: true,
        showTopBtn: false
      }
    }
    this.messageService.setNavStatus(navstatus);
  }
}
