import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }
  private teacherMessageSource=new Subject<string>();
  private studentMessageSource=new Subject<string>();
  studentMessage$=this.studentMessageSource.asObservable();
  teacherMessage$=this.teacherMessageSource.asObservable();


  sendTeacherMessage(msg:string){
    this.teacherMessageSource.next(msg); 
  }
  sendStudentMessage(mssg:string){
    this.studentMessageSource.next(mssg);
  }
}
