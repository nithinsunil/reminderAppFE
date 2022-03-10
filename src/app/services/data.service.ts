import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';


const options = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  database: any = {
    1000: { uid: 1000, uname: "michael", pwd: "1000" },
    1001: { uid: 1001, uname: "jim", pwd: "1001" },
    1002: { uid: 1002, uname: "pam", pwd: "1002" },
    1003: { uid: 1003, uname: "dwight", pwd: "1003" }
  }

  constructor() { }

  // register(uid: any, uname: any, pwd: any) {
  //   const data = {
  //     uid,
  //     uname,
  //     pwd
  //   }
  //   return true
  // }
}
