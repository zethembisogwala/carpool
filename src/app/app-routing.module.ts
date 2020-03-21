import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreadComponent } from './messaging/thread/thread.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { TravelComponent } from './tabs/tabs/travel/travel.component';


const routes: Routes = [
	{
    path: '',
    redirectTo: 'travel',
    pathMatch: 'full'
  },
  {
  	path: 'tabs', 
  	component: TabsComponent
  },
  {
    path: 'travel',
    component: TravelComponent
  },
  {
    path: 'thread/:toId',
    component: ThreadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
