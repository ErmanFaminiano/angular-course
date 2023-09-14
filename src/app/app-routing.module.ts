import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
const routes: Routes = [
  {
    path: '',
    component: NavbarComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'course',
    component: CoursesComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
