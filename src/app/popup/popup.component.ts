import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material";
import {SuperData} from '../super-data';
import{superNames} from '../storage';
import{sizes} from '../storage';




@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  superNames :string[];
  sizes: string[];

  constructor(private dialogRef: MatDialogRef<PopupComponent>,@Inject(MAT_DIALOG_DATA) public data: any){
  }

  close() {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.superNames =superNames;
    this.sizes = sizes;
  }

  save(owner:string,superBrand:string,size:string,
       numOfEmployees:number,info:string) {

    if (owner === "" || superBrand === "") {
      this.dialogRef.close();
    }

    const superData:SuperData = {
      id:null,
      owner:owner,
      brand:superBrand,
      size:size,
      numOfEmployees:numOfEmployees,
      info:info
    }
    this.dialogRef.close(superData);
  }

}
