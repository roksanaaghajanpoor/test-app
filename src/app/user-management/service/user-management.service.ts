import { Injectable } from '@angular/core';
import { UserListModel, UserStatusModel } from '../shared/user-model';
import { USER_LIST } from '../shared/user.const';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  users: UserListModel[] = USER_LIST;

  constructor() { }

  getUserList() {
    return this.users;
  }

  getUser(id: number) {
    const index = this.users.findIndex(item => item.id === id);
    return this.users[index];
  }
}
