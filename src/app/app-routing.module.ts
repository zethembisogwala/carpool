import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from './tabs/tabs/tabs.component'


const routes: Routes = [
	{
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
  	path: 'tabs', 
  	component: TabsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
