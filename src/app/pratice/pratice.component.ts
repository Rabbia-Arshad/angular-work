import { Component, OnInit } from '@angular/core';
import { EleService } from '../ele-service.service';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-pratice',
  templateUrl: './pratice.component.html',
  styleUrls: ['./pratice.component.css']
})
export class PraticeComponent implements OnInit {
  public elelist=[];
  public str:string;
  public errorName;
//  constructor(private _interaction:InteractionService) { }
  constructor(private _element:EleService){}
  ngOnInit(){
    this._element.getEmloyee()
    .subscribe(
      data=> this.elelist=data,
      erro=> this.errorName=erro
    );
  }
  // ngOnInit(): void {
  //   this._interaction.teacherMessage$
  //   .subscribe(
  //     msg =>{
  //       alert(msg);
  //       if (msg=="GOOD MORNING"){
  //         this.GoodMorning();
  //       }
  //       else{
  //         this.ThanksTeacher();
  //       }
  //     }
  //   )
  // }

  // ThanksTeacher(){
  //   this._interaction.sendStudentMessage("THANK YOU TEACHER");
  // }
  // GoodMorning(){
  //   this._interaction.sendStudentMessage("GOOD MORNING U TOO");
  // }
  
}
