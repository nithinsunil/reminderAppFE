import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';


const options = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUserName: any
  currentUserId: any

  database: any = {
    2000: { uid: 2000, uname: "michael", pwd: "2000" },
    2001: { uid: 2001, uname: "jim", pwd: "2001" },
    2002: { uid: 2002, uname: "pam", pwd: "2002" },
    2003: { uid: 2003, uname: "dwight", pwd: "2003" }
  }

  constructor(private http: HttpClient) { }

  register(uid: any, uname: any, pwd: any) {
    const data = {
      uid,
      uname,
      pwd
    }
    return this.http.post("http://localhost:3000/register", data)
  }

  login(uid: any, pwd: any){
    const data = {
      uid,
      pwd
    }
    // login API
    return(this.http.post("http://localhost:3000/login", data))
  }
}
