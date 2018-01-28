import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css']
})
export class SpriteComponent {

  private photoURL:string='http://fe.it-academy.by/Examples/cards2.png';

  private coordinate:Array<{offset_x:number, offset_y:number, width:number, height:number}>=[
    {
      offset_x:22,
      offset_y:2,
      width:189,
      height:138
    },
  ];


  get stars():number {
    return this._stars;
  };

  set stars(s:number) {
    this._stars=s;
  }

  getName():string {
    return this.hotelName;
  }

  getRooms():string {
    return this.rooms
      .map( room => "N"+room.num+"("+room.beds+"b)" )
      .join("\n")
      ;
  };

  getPhoto():string {
    return this.photo;
  };


}
