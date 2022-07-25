import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserListModel } from '../shared/user-model';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinalStepComponent {

  userInfo: UserListModel = JSON.parse(localStorage.getItem("USER") || "");
  userImage: any;
  imageUrl: string = JSON.parse(localStorage.getItem("USER_IMAGE") || "");

  constructor() { }
}
