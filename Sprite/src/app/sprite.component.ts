
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css']
})
export class SpriteComponent {

  photoURL:string='http://fe.it-academy.by/Examples/cards2.png';

  private offset_x:number
  private offset_y:number
 


  private size:Array<{width:number, height:number}>=[
    {
      width:189,
      height:140
    },
  ];

  get coord():number {
    return (this.offset_x=22, this.offset_y=2)
  };

/*  set coord({x:number, y:number}) {
    this.offset_x=this.x;
    this.offset_y=y;
  }*/

  getName():string {
    return this.photoURL;
  }

/*  getRooms():string {
    return this.rooms
      .map( room => "N"+room.num+"("+room.beds+"b)" )
      .join("\n")
      ;
  };

  getPhoto():string {
    return this.photo;
  };*/


}
