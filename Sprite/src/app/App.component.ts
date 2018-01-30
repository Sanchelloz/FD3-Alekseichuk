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

  @Input("coordX")
  private offset_x:number;

  @Input("coordY")
  private offset_y:number;

  @Output("coordXChange")
  private coordXOutputEE=new EventEmitter<number>();

  @Output("coordYChange")
  private coordYOutputEE=new EventEmitter<number>();

  getCoordinateX():number {
    return this.offset_x;
  }

  getCoordinateY():number {
    return this.offset_y;
  }

  setCoordinateX(s:number):void {
    this.coordXOutputEE.emit(s);
  }

  setCoordinateY(s:number):void {
    this.coordYOutputEE.emit(s);
  }

  setCoordinateXY(s1:number,s2:number):void {
    this.setCoordinateX(s1);
    this.setCoordinateY(s2);
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