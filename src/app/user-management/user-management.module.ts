import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { StepsModule } from 'primeng/steps';
import { MessageService } from 'primeng/api';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "upload-img",
    loadChildren: () => import('./upload-image/upload-image.module').then(m => m.UploadImageModule)
  },
  {
    path: "user-form",
    loadChildren: () => import('./user-form/user-form.module').then(m => m.UserFormModule)
  },
  {
    path: "user-form/:id",
    loadChildren: () => import('./user-form/user-form.module').then(m => m.UserFormModule)
  },
  {
    path: "user-list",
    loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule)
  },
  {
    path: "final-step",
    loadChildren: () => import('./final-step/final-step.module').then(m => m.FinalStepModule)
  }
];

@NgModule({
  declarations: [
    UserManagementComponent,
  ],
  imports: [
    CommonModule,
    StepsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UserManagementComponent
  ],
  providers: [MessageService]
})
export class UserManagementModule { }