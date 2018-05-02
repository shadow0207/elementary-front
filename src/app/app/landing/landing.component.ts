import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as particlesJS from 'particles.js';
import{myFirstParticle} from './particle-config'
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
 
  constructor(private route: ActivatedRoute,
    private router: Router) { 

      
    }

    ngOnInit() {
      particlesJS('particles-js','particles.js',function()
    {
      console.log('callback - particles.js config loaded');
    })
  }
  redir() {
    this.router.navigate(['/dashboard']);
  }
}
