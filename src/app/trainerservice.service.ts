import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrainerserviceService {

  private baseUrl ="http://localhost:8081/trainer/signup";
  constructor(private http:HttpClient) { }
  createTrainer(Trainer:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,Trainer);
  }

}
