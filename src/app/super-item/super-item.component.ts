import { Component, OnInit,Input } from '@angular/core';
import {SuperData} from "../super-data";

@Component({
  selector: 'app-super-item',
  templateUrl: './super-item.component.html',
  styleUrls: ['./super-item.component.css']
})
export class SuperItemComponent implements OnInit {

   @Input() superData:SuperData;

  constructor() {}

  ngOnInit() {
  }
}
