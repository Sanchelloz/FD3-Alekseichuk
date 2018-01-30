import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-block',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppBlockComponent {

  private photoURL:string = 'http://fe.it-academy.by/Examples/cards2.png';
  private imgWidth:number=138;
  private imgHeight:number=189;

  @Input("coord")
  private offset_x:number;
  private offset_y:number;

  @Output("coordChange")
  private coordXOutputEE=new EventEmitter<number>();
  private coordYOutputEE=new EventEmitter<number>();

  getCoordinateX():string {
    return this.offset_x+"px";
  }

  getCoordinateY():string {
    return this.offset_y+"px";
  }

  setCoordinateX(s:number):void {
    this.coordXOutputEE.emit(s);
  }

  setCoordinateY(s:number):void {
    this.coordYOutputEE.emit(s);
  }

  getFoto():string {
    return this.photoURL
  };

  getSizeWidth():number {
    return this.imgWidth;
  };

  getSizeHeight():number {
    return this.imgHeight;
  };
}