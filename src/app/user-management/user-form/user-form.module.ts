import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { UserFormComponent } from './user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';

const routes: Routes = [
  {
    path: "",
    component: UserFormComponent
  },
];

@NgModule({
  declarations: [
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    AutoCompleteModule,
    RouterModule.forChild(routes)
  ],
})
export class UserFormModule { }
