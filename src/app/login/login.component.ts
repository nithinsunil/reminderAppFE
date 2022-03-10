import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }


  loginForm = this.fb.group({
    uid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })


  login() {
    var uid = this.loginForm.value.uid
    var pwd = this.loginForm.value.pwd

    if (this.loginForm.valid) {
      alert("valid form")
      this.router.navigateByUrl("dashboard")
    }
    else {
      alert("invalid form")
    }
  }

}
