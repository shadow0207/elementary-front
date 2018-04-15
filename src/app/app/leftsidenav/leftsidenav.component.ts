import { Component, OnInit } from '@angular/core';
import{Title} from '@angular/platform-browser'

@Component({
  selector: 'app-leftsidenav',
  templateUrl: './leftsidenav.component.html',
  styleUrls: ['./leftsidenav.component.scss']
})
export class LeftsidenavComponent implements OnInit {
  selected:string;
  folders = [
    {
      name: 'One with the dogs',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Bridge',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Titanic',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Bridge2',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Titanic2',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Bridge3',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Titanic3',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Bridge4',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Titanic4',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Bridge5',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Titanic5',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Bridge6',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Titanic6',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Bridge7',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Titanic7',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Bridge8',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Titanic8',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Bridge9',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Titanic9',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Bridge10',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Titanic10',
      updated: new Date('1/28/16'),
    },
    {
      name: 'Bridge11',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Titanic11',
      updated: new Date('1/28/16'),
    }
  ];

  constructor(private titleService: Title) { }

  ngOnInit() {
    
  }
  public setTitle( newTitle: string) {
   this.selected=newTitle;
    this.titleService.setTitle( newTitle);
  }
}
