import { Component, ViewChild,ElementRef, AfterViewInit, OnInit } from '@angular/core';
//import { Pratice5Component } from './pratice5/pratice5.component';
import { InteractionService } from './interaction.service';
import { Pratice5Component } from './pratice5/pratice5.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Pizaa web';
  public strname:string;
  name="Rabbia Arshad";
 // message:string;
  // public imgUrl="https://unsplash.it/1200/768.jpg?image=251";
  // count=0;
  // increamentcount(){
  //   this.count+=1;
  // } 
  // doSomething(updated){
  //   this.name=updated;
  //   if (updated == "Rabbia"){
  //     alert("Welcome Rabbia Again");
  //   }
  // }

  @ViewChild('Pratice') childComponentRef:Pratice5Component; 
  // // @ViewChild('eleRef') nameElementRef:ElementRef;
  ngAfterViewInit(){
     this.childComponentRef.greet();
  }
  constructor(){}
  ngOnInit():void{}

  // constructor(private _interactionService:InteractionService){}
  // ngOnInit():void{
  //     this._interactionService.studentMessage$
  //     .subscribe(
  //       mssg=>{
  //         this.strname=mssg;
  //         alert(mssg);
  //       }
  //     )
  // }


  // sendGoodMorning(){
  //   this._interactionService.sendTeacherMessage("GOOD MORNING");
  // }
  // sendAppriciate(){
  //   this._interactionService.sendTeacherMessage("APPRECIATION FOR ALL OF U")
  // }
}
