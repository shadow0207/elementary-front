import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef} from '@angular/core';

import{ToasterServiceService} from '../toaster-service.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  mobileQuery: MediaQueryList;
  
 
  
    private _mobileQueryListener: () => void;
     notiCount:Number
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private toastr:ToasterServiceService) {
      this.mobileQuery = media.matchMedia('(max-width: 800px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
      this.notiCount=Math.floor(Math.random() * 10) + 1 
    }
  
    ngOnDestroy(): void {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }
  
    shouldRun:boolean=true;
    generateNoti()
    {
      for(let i=0;i<this.notiCount;i++)
      {
        this.toastr.info("Notification ");
      }
        
        this.notiCount=0;
    }
  }
  

 

