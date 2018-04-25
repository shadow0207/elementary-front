import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-postquerydialog',
  templateUrl: './postquerydialog.component.html',
  styleUrls: ['./postquerydialog.component.scss']
})
export class PostquerydialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PostquerydialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
