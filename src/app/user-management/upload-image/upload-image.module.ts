import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImageComponent } from './upload-image.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  {
    path: "",
    component: UploadImageComponent
  },
];

@NgModule({
  declarations: [
    UploadImageComponent,
  ],
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
})
export class UploadImageModule { }
