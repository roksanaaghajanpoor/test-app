import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadImageComponent implements OnInit {
  name = 'Angular';
  fileToUpload: any;
  imageUrl: any;

  constructor(private router: Router, private dtr: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("USER_IMAGE"))
    if (localStorage.getItem("USER_IMAGE")) {
      this.imageUrl = JSON.parse(localStorage.getItem("USER_IMAGE") || "");
    }
  }

  handleFileInput(file: any) {
    this.fileToUpload = file.target.files.item(0);

    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      localStorage.setItem("USER_IMAGE", JSON.stringify(event.target.result))
      this.dtr.detectChanges();
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  navigate() {
    this.router.navigate(['/user-form']);
  }
}
