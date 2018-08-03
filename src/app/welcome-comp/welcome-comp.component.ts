import {Component, OnInit} from '@angular/core';
import {SuperDataManagementService} from "../super-data-management.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-welcome-comp',
  templateUrl: './welcome-comp.component.html',
  styleUrls: ['./welcome-comp.component.css']
})
export class WelcomeCompComponent implements OnInit {

  constructor(private dataManagService: SuperDataManagementService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.InitNavStatus();
  }

  private InitNavStatus() {
    const navstatus: navStatus = {  // Update the navigation bar
      _topNav: {
        addBtn: true,
        searchBtn: true,
        editBtn: false,
        deleteBtn: false
      },
      _bottomNav: {
        showNav: false,
        showTopBtn: false
      }
    }
    this.messageService.setNavStatus(navstatus);
  }

}
