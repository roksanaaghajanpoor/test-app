import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FinalStepComponent } from './final-step.component';
import { ImageModule } from 'primeng/image';

const routes: Routes = [
  {
    path: "",
    component: FinalStepComponent
  },
];

@NgModule({
  declarations: [
    FinalStepComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ImageModule,
    RouterModule.forChild(routes)
  ],
})
export class FinalStepModule { }
