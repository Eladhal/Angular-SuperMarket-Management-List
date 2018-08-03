import { Component, OnInit } from '@angular/core';
import {SuperData} from "../super-data";
import {SuperDataManagementService} from "../super-data-management.service";
import {MessageService} from "../message.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  listOfSuper:SuperData[];
  subscription: Subscription;

  constructor(private dataManagService:SuperDataManagementService,
              private messageService:MessageService) {
  }

  ngOnInit() {
    this.listOfSuper = this.dataManagService.getSuperList();

    this.subscription = this.messageService.getUpdateFromDB().subscribe(update => {
      this.listOfSuper = this.dataManagService.getSuperList();
    });
  }
}
