import { Component } from '@angular/core';
import {supers} from "./storage";
import {SuperDataManagementService} from "./super-data-management.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataManagService:SuperDataManagementService) {
    const superArray = this.dataManagService.getSuperList();

    if (superArray === null) {
      localStorage.setItem('SuperMarkets',JSON.stringify(supers))
    }
  }
}
