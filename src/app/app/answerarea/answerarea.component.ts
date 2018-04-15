import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {HistorydialogcompComponent} from '../historydialogcomp/historydialogcomp.component';
import{ToasterServiceService} from '../toaster-service.service';
@Component({
  selector: 'app-answerarea',
  templateUrl: './answerarea.component.html',
  styleUrls: ['./answerarea.component.scss']
})
export class AnswerareaComponent implements OnInit {

  constructor(public dialog: MatDialog,private toastr:ToasterServiceService) { }

  ngOnInit() {
  }

  onHistory() {
    let dialogRef = this.dialog.open(HistorydialogcompComponent, {
      width: '500px',
      height:'250px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  success()
  {
    
    this.toastr.success("Working");
  }
}
