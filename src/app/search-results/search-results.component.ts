import { Component, OnInit } from '@angular/core';
import {SuperData} from "../super-data";
import {MessageService} from "../message.service";
import {ActivatedRoute} from "@angular/router";
import {SuperDataManagementService} from "../super-data-management.service";
import {Subscription} from "rxjs/index";


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  filteredSupers:SuperData[];
  noResults:boolean;
  constructor(private messageService: MessageService, private actRoute:ActivatedRoute,
              private dataManagService:SuperDataManagementService) { }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(routeParams => {
      this.filteredSupers = this.dataManagService.getFilteredList((routeParams.For).toLowerCase());

      if (this.filteredSupers.length>0) {
          this.noResults = false;
          this.InitNavStatus();
        }
      else {
          this.noResults = true;
        }
      }
    );
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
        showTopBtn: true
      }
    }
    this.messageService.setNavStatus(navstatus);
  }
}
