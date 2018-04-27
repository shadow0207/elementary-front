import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-imageclue',
  templateUrl: './imageclue.component.html',
  styleUrls: ['./imageclue.component.scss']
})
export class ImageclueComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,public snackBar: MatSnackBar) {

    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
   }

  ngOnInit() {
    
  }
  seeFileName()
  {
    this.openSnackBar("Clue","Zoo");
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
  searchByImage()
  {
    
    window.open('http://images.google.com/searchbyimage?image_url='+'http://printablecoloringpagesforkids.us/wp-content/uploads/2017/12/zoo-animal-coloring-sheets-www-bloomscenter-within-animal-pictures-coloring-pages.jpg');
  }
  copyToClipboard(text:string){
    
    var event = (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', text);
      e.preventDefault();
      document.removeEventListener('copy', event);
  }
  document.addEventListener('copy', event);
  document.execCommand('copy');
  this.openSnackBar("Copied","Clipboard")
  }
}
