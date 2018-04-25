import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{PostquerydialogComponent} from '../postquerydialog/postquerydialog.component'
import {HistorydialogcompComponent} from '../historydialogcomp/historydialogcomp.component';
@Component({
  selector: 'app-hint-blog',
  templateUrl: './hint-blog.component.html',
  styleUrls: ['./hint-blog.component.scss']
})
export class HintBlogComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(public dialog: MatDialog,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  
  }

  ngOnInit() {
  }
  postQuery()
  {
    let dialogRef = this.dialog.open(PostquerydialogComponent, {
      width: '300px',
      height:'300px',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
