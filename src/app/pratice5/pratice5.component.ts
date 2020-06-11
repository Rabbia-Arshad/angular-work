import { Component, OnInit,Input, Output,EventEmitter, SimpleChange } from '@angular/core';
import { EleService } from '../ele-service.service';


@Component({
  selector: 'app-pratice5',
  templateUrl: './pratice5.component.html',
  styleUrls: ['./pratice5.component.css']
})

export class Pratice5Component{
  public elelist=[];
  public work=false;
  public rname:string;
  public  message:string;
  public errorName;
  // @Input('ParentData') public name; 
  // public color=name;
  // @Output() public childEvent=new EventEmitter(); 
  //@Input() nameValue:string;
  constructor(private _element:EleService) { }
  //constructor() { }
  
  ngOnInit(): void {
    this._element.getEmloyee()
    .subscribe(
      data => this.elelist=data,
      error => this.errorName=error
      );
  }
  // sendEvent(){
  //   this.childEvent.emit(this.elelist);
  // }
  greet(){
    alert("Hy whats going on")
  }

  // get nameValue(){
  //   return this.rname;
  // }
  // @Input()
  // set nameValue(name:string){
  //   this.rname=name;
  //   this.greet();
  // }

}
