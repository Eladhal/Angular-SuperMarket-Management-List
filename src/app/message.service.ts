import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  navStatus = new Subject<navStatus>();
  DBchnges = new Subject<boolean>()
  constructor() { }

  setNavStatus(value: navStatus) {
    this.navStatus.next(value); // publishing this value to all
  }

  getNavStatus() {
    return this.navStatus.asObservable();
  }

  updateDB(){
    this.DBchnges.next(true);
  }
  getUpdateFromDB() {
    return this.DBchnges.asObservable();
  }

}
