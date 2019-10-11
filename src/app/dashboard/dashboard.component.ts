import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username = '';
  formcountdisplay : any;
  constructor(private builder :FormBuilder,private router : Router) { }

  ngOnInit() {
    this.username =  localStorage.getItem('username');
    
  }
  OnSurveyCreate(){
    this.router.navigate(['questiondes']);
  }

}
