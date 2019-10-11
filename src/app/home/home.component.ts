import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeservice : HomeService) { }

  ngOnInit() {

    
    this.homeservice.getUserDetails(Number(localStorage.getItem('userid'))).subscribe((results : any) => {
      console.log(results);
    });
   
  }
}

