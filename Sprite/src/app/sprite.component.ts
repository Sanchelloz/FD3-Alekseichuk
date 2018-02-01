
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css']
})

export class SpriteComponent {

  private photoURL:string = 'http://fe.it-academy.by/Examples/cards2.png';
  private imgWidth:number=138;
  private imgHeight:number=189;

  getFoto():string {
    return this.photoURL
  };

  getSizeWidth():number {
    return this.imgWidth;
  };

  getSizeHeight():number {
    return this.imgHeight;
  };

  @Input("coordX")
  private offset_x:number; //создаем входное свойство чтоб потом привязать к нему get CoordX() из Арр.component.ts

  @Input("coordY")
  private offset_y:number;

  @Output("clicked")
  private clicked = new EventEmitter<void>(); //создаем выходное свойство чтоб увидеть что что-то было сделано, в часстности кликнут элемент

  getCoordinateX():number {
    return this.offset_x;
  }

  getCoordinateY():number {
    return this.offset_y;
  }

  imgClicked():void {
    this.clicked.emit(); //выпускаем событие, что оно произошло
  }

}