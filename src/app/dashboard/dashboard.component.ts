import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any
  uid: any
  logDate: any

  constructor(private ds: DataService, private fb: FormBuilder, private router:Router) { 
    if(localStorage.getItem("currentUserName")){
      this.user = JSON.parse(localStorage.getItem("currentUserName") || '')
    }
    this.logDate = new Date
  }

  ngOnInit(): void {
  }
addEvent(){
  
}

}
