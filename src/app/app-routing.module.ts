import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarListComponent} from "./shared/car-list/car-list.component";
import {CarEditComponent} from "./shared/car-edit/car-edit.component";

const routes: Routes = [
  {path: '', redirectTo: '/car-list', pathMatch: 'full'},
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    pathMatch: 'car-edit/:id',
    component: CarEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
