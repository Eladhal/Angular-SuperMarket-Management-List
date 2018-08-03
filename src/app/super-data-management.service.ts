import {Injectable} from '@angular/core';
import {SuperData} from "./super-data";
import {MessageService} from "./message.service";


@Injectable({
  providedIn: 'root'
})
export class SuperDataManagementService {

  constructor(private messageService: MessageService) {
  }

  add(superData: SuperData) {
    superData.id = this.getSuperId();
    const superArray = this.getSuperList();
    superArray.push(superData);
    this.setSuperList(superArray);
  }

  Update(superData: SuperData, id: Number) {
    const superArray = this.getSuperList();

    superArray.forEach((item) => {
      if (item.id === id) {
        item.size = superData.size;
        item.brand = superData.brand;
        item.info = superData.info;
        item.numOfEmployees = superData.numOfEmployees;
        item.owner = superData.owner;
      }
    })
    this.setSuperList(superArray);
  }

  private getSuperId() {
    const superArray = this.getSuperList();
    if (superArray === undefined) {
      return 0;
    }
    else {
      return superArray.length + 1;
    }
  }

  getSuperItem(Id: number) {
    const superArray = this.getSuperList();
    return superArray.find(rec => rec.id === Id);
  }

  DeleteSuper(Id: Number) {
    let superArray = this.getSuperList();
    superArray = superArray.filter(rec => rec.id != Id);
    this.setSuperList(superArray);
  }

  getFilteredList(search: string) {
    const superArray = this.getSuperList();
    return superArray.filter(rec=> rec.size.toLowerCase().includes(search)||
      rec.info.toLowerCase().includes(search)||
      rec.owner.toLowerCase().includes(search)|| rec.brand.toLowerCase().includes(search))
  }

  private setSuperList(superArray) {
    localStorage.setItem('SuperMarkets', JSON.stringify(superArray))
    this.messageService.updateDB();
  }

  getSuperList() {
    return JSON.parse(localStorage.getItem('SuperMarkets'));
  }

}
