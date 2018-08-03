import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeCompComponent} from "../welcome-comp/welcome-comp.component";
import {SearchResultsComponent} from "../search-results/search-results.component";
import {NoSearchResultsComponent} from "../no-search-results/no-search-results.component";
import {SuperItemContainerComponent} from "../super-item-container/super-item-container.component";

const routes: Routes = [
  {path:'', redirectTo: '/super-branch', pathMatch: 'full' },
  {path:'super-branch/search/no-results',component:NoSearchResultsComponent},
  {path:'super-branch/search',component:SearchResultsComponent},
  {path:'super-branch/:id', component: SuperItemContainerComponent },
  {path:'super-branch',component:WelcomeCompComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule { }
