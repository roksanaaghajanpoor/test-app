import { UserStatusModel } from './../shared/user-model';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserManagementService } from '../service/user-management.service';
import { USER_STATUS } from '../shared/user.const';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  userStatus: UserStatusModel[] = USER_STATUS;
  filteredStatus: UserStatusModel[] = this.userStatus;
  maxDateValue = new Date();
  userId: string = "";

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserManagementService) { }

  ngOnInit(): void {
    this.createForm();
    this.maxDateValue.setDate(this.maxDateValue.getDate() + 5);
    this.userId = this.route.snapshot.paramMap.get('id') || "";
    if (this.userId) {
      this.getUser(+this.userId)
    } else {
      this.setSavedData();
    }
  }

  setSavedData() {
    const savedData = JSON.parse(localStorage.getItem("USER") || "");
    this.userForm.patchValue({
      amount: savedData.amount,
      date: new Date(savedData.date),
      status: savedData.status,
      source: savedData.source,
    });
  }

  createForm() {
    this.userForm = this._fb.group({
      amount: [null, [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
      date: [new Date(), Validators.required],
      status: [null, Validators.required],
      source: ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]]
    })
  }

  filterUserStatus(event: any) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.userStatus.length; i++) {
      let country = this.userStatus[i];
      if (country.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredStatus = filtered;
  }

  getUser(userId: number) {
    const user = this.userService.getUser(userId);
    const index = this.userStatus.findIndex(item => item.value === user.status.value);
    this.userForm.patchValue({
      amount: user.amount,
      date: new Date(user.date),
      status: this.userStatus[index],
      source: user.source,
    });
  }

  save() {
    if (this.userForm.valid) {
      if (+this.userId) {
        const user = this.userService.getUser(+this.userId);
        const index = this.userService.users.findIndex(item => item.id === user.id);
        this.userService.users[index] = this.userForm.getRawValue();
      } else {
        this.userService.users.push({
          id: Math.random(),
          amount: this.userForm.getRawValue().amount,
          date: this.userForm.getRawValue().date,
          status: this.userForm.getRawValue().status,
          source: this.userForm.getRawValue().source
        })
      }
      localStorage.setItem("USER", JSON.stringify(this.userForm.getRawValue()));
      this.router.navigate(['/user-list']);
    }
  }
}
