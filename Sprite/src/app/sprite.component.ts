
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sprite',
  templateUrl: 'sprite.component.html',
  styleUrls: ['sprite.component.css']
})
export class SpriteComponent {

  private _offset_x:number = 0;
  private _offset_y:number = -2;


  get coordX():number {
    return this._offset_x;
  }

  get coordY():number {
    return this._offset_y;
  }

}
