import {Component, OnInit} from '@angular/core';
import {MessageService} from "../message.service";
import {ActivatedRoute} from "@angular/router";
import {SuperData} from "../super-data";
import {SuperDataManagementService} from "../super-data-management.service";
import {Subscription} from "rxjs/index";


@Component({
  selector: 'app-super-item-container',
  templateUrl: './super-item-container.component.html',
  styleUrls: ['./super-item-container.component.css']
})
export class SuperItemContainerComponent implements OnInit {
  subscription: Subscription;

  constructor(private messageService: MessageService, private actRoute: ActivatedRoute,
              private dataManagService: SuperDataManagementService) {
  }

  superData: SuperData;

  ngOnInit() {
    this.actRoute.params.subscribe(routeParams =>
      this.superData = this.dataManagService.getSuperItem(+routeParams.id)
    );

    this.subscription = this.messageService.getUpdateFromDB().subscribe(update => {
      const listOfSuper = this.dataManagService.getSuperList();
      for (let i=0;i<listOfSuper.length;i++){
        if (listOfSuper[i].id === this.superData.id){
          this.superData = listOfSuper[i];
        }
      }
    });

    this.InitNavStatus();
  }

  private InitNavStatus() {
    const navstatus: navStatus = {  // Update the navigation bar
      _topNav:{
        addBtn: false,
        searchBtn: false,
        editBtn: true,
        deleteBtn: true
      },
      _bottomNav:{
        showNav: true,
        showTopBtn: false
      }
    }
    this.messageService.setNavStatus(navstatus);
  }
}
