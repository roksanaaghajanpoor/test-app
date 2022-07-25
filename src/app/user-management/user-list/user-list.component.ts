import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserManagementService } from '../service/user-management.service';
import { UserListModel } from '../shared/user-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  users: UserListModel[] = [];
  selectedUserId: number = -1;

  constructor(private userService: UserManagementService, private router: Router) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.users = this.userService.getUserList();
  }

  onRowSelect(event: any) {
    this.selectedUserId = event.data.id;
  }

  onRowUnselect() {
    this.selectedUserId = -1;
  }

  back() {
    if (this.selectedUserId === -1) {
      this.router.navigate(["/user-form"])
    } else {
      this.router.navigate([`/user-form/${this.selectedUserId}`])
    }
  }
}
