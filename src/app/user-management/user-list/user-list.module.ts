import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { UserListComponent } from './user-list.component';
import { TableModule } from 'primeng/table';

const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
];

@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,    
    RouterModule.forChild(routes)
  ],
})
export class UserListModule { }
