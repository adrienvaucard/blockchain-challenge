import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ViewpageComponent } from './components/viewpage/viewpage.component'


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },

  {
    path: 'view',
    component: ViewpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
