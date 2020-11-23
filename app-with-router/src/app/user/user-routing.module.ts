// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: "user/list",
    component: ListComponent
  },
  {
    path: "user/detail/:id",
    component: DetailComponent
  }
];

export const UserRoutingModule = RouterModule.forChild(routes);


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
