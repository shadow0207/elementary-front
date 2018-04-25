import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{PostquerydialogComponent} from '../postquerydialog/postquerydialog.component'
import {HistorydialogcompComponent} from '../historydialogcomp/historydialogcomp.component';
import{ToasterServiceService} from '../toaster-service.service';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-answerarea',
  templateUrl: './answerarea.component.html',
  styleUrls: ['./answerarea.component.scss']
})
export class AnswerareaComponent implements OnInit {
  query:string;
  answerForm:FormGroup;
  constructor(public dialog: MatDialog,private toastr:ToasterServiceService) { }

  ngOnInit() {
    this.answerForm=new FormGroup({
      answer: new FormControl('')
    });
  }

  onHistory() {
    let dialogRef = this.dialog.open(HistorydialogcompComponent, {
      minWidth: '300px',
      height:'500px',
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
  onSearch()
  {
    this.query=this.answerForm.controls['answer'].value;
    
    if(this.query!=""){
        window.open('http://www.google.com/search?q='+this.query);
    }
  }
}
