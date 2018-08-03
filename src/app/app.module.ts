import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {RoutingModule} from './routing/routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PopupComponent } from './popup/popup.component';
import {SuperDataManagementService} from "./super-data-management.service";
import { SuperItemComponent } from './super-item/super-item.component';
import { LinksComponent } from './links/links.component';
import {MessageService} from "./message.service";
import { WelcomeCompComponent } from './welcome-comp/welcome-comp.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NoSearchResultsComponent } from './no-search-results/no-search-results.component';
import { SuperItemContainerComponent } from './super-item-container/super-item-container.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupComponent,
    SuperItemComponent,
    LinksComponent,
    WelcomeCompComponent,
    SearchResultsComponent,
    NoSearchResultsComponent,
    SuperItemContainerComponent,
    BottomNavComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    RoutingModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [SuperDataManagementService,MessageService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
