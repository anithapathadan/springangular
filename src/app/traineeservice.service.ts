import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraineeserviceService {

  private baseUrl ="http://localhost:8081/trainee/signup";
  constructor(private http:HttpClient) { }
  createTrainee(Trainee:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,Trainee);
}
}
