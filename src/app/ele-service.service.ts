import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Iemployee } from './employee';
// import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

//import 'rxjs/add/observable/throwError';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EleService {
  public url="/assets/data/employees.json";
  constructor(private http:HttpClient) { }
 
  getEmloyee(): Observable<Iemployee[]>{
    return this.http.get<Iemployee[]>(this.url)
                .pipe(catchError(this.errorHandler));
   }

   errorHandler(error:HttpErrorResponse){
      return throwError(error.message || "Server Failure"); 
   }
}
