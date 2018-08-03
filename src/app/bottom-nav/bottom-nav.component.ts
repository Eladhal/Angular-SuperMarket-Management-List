import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from "../message.service";
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {

  queryParam: string;
  navigation: bottomNavStatus;
  subscription: Subscription;

  constructor(private router: Router, private messageService: MessageService,
              private actRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.actRoute.queryParams.subscribe(data => {
        this.queryParam = data.For;
      }
    );

    this.subscription = this.messageService.getNavStatus().subscribe(nav => {
      this.navigation = nav._bottomNav;
    });
  }

  getRefForTopClick(){
      return (`/super-branch/search?For=${this.queryParam}#Top`);
  }
}
