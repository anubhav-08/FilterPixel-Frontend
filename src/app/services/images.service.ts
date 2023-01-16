import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  s3Url = 'http://127.0.0.1:8000/';
  googleUrl = 'http://127.0.0.1:8000/google/';
  header = new HttpHeaders().set(
    "Authorization",
     localStorage.getItem("token")? "Token "+localStorage.getItem('token') : "not authorized"
  );
  showS3 = true;
  constructor(private http:HttpClient) { }
  getS3Image()
  {
    return this.http.get(this.s3Url, {"headers" : this.header});
  }
  getGoogleImage()
  {
    return this.http.get(this.googleUrl, {"headers" : this.header});
  }
}
