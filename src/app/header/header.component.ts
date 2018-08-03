import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {PopupComponent} from "../popup/popup.component";
import {SuperData} from "../super-data";
import {SuperDataManagementService} from "../super-data-management.service";
import { Subscription } from 'rxjs';
import {MessageService} from "../message.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigation: topNavStatus;
  subscription: Subscription;

  constructor(private dialog: MatDialog, private dataManagService: SuperDataManagementService,
              private messageService: MessageService, private route: Router) {
  }

  ngOnInit() {
    this.subscription = this.messageService.getNavStatus().subscribe(nav => {
      this.navigation = nav._topNav;
    });
  }

  addSuper() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let dialogRef = this.dialog.open(PopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataManagService.add(result as SuperData);
      }
    });
  }

  EditSuper() {
    const id = Number(this.route.url.slice(-1));
    const selectedSuper = this.dataManagService.getSuperItem(id);
    let dialogRef = this.dialog.open(PopupComponent,
      {disableClose: true, autoFocus: true, data: {selectedSuper}});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataManagService.Update(result as SuperData, id);
      }
    });
  }

  DeleteBtn() {
    const id = Number(this.route.url.slice(-1));
    this.dataManagService.DeleteSuper(id);
    this.route.navigate(['super-branch']);
  }

  SearchBtn(search:string){
      this.route.navigate(['/super-branch/search'], {queryParams: {For: search}});
  }

}
