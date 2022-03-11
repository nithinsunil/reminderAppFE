import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  registerForm = this.fb.group({
    uid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    uname: ['', [Validators.required, Validators.pattern('[a-zA-z ]*')]],
    pwd: ['', [Validators.required, Validators.pattern('[a-zA-z0-9]*')]]
  })

  register() {
    var uid = this.registerForm.value.uid
    var uname = this.registerForm.value.uname
    var pwd = this.registerForm.value.pwd

    if (this.registerForm.valid) {
      this.ds.register(uid, uname, pwd)
      .subscribe((result: any)=>{
        if(result){
          alert(result.message)
          this.router.navigateByUrl("")
        }
      },
      (result) =>{
        alert(result.error.message)
      }
      )   
      
    }
    else{
      alert("invalid form")
    }
    
  }
}
