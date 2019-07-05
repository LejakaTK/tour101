import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataAccessorService {
  baseUrl:string = "https://api.myjson.com/bins/16rsi3";
  anything;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get(this.baseUrl).subscribe(res=>{
      this.anything = res;
      return this.anything;
    });
  }

  getData(){
    this.http.get(this.baseUrl).subscribe(res=>{
      this.anything = res;
    });
    return this.anything;
  }





}
