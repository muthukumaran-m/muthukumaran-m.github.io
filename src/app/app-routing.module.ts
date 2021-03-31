import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { InsightsComponent } from './components/insights/insights.component';
import { ShowComponent } from './components/insights/show/show.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  { path: 'profile', component: HomeComponent,data: {animation: 'ProfilePage'} },
  { path: 'work', component: WorkComponent,data: {animation: 'WorkPage'} },
  { path: 'contact', component: ContactComponent,data: {animation: 'ContactPage'}  },
  { path: 'insights', component: InsightsComponent,data: {animation: 'InsightsPage'}  },
  { path: 'insights/:postID', component: ShowComponent,data: {animation: 'InsightsShowPage'}  },
  { path: '**', redirectTo: 'profile'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
