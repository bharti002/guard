import { Injectable,Inject } from '@angular/core';
//import { Inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(@Inject (HttpClient) public ser ) { }
  Fun_insert(obj){
    return this.ser.post("insert",obj)

  }

  fun_get(){
    return this.ser.get("getdata")
  }
  funUpdateData(x){
    return this.ser.post("update",x)
  }
}
