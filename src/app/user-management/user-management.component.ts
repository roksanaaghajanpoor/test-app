import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { STEP_ITEMS } from './shared/user.const';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  items: MenuItem[] = [];
  activeIndex: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.items = STEP_ITEMS;
  }

}
