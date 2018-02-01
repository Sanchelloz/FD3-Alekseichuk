import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  private _offset_x:number = -2;
  private _offset_y:number = 0;

  get CoordX():number {
    return this._offset_x;
  }

  get CoordY():number {
    return this._offset_y;
  }

  setCoordX(x:number) {
    this._offset_x = x;
  }

  setCoordY(y:number) {
    this._offset_y = y;
  }

  changeImg(s1:number,s2:number):void {
    this.setCoordX(s1);
    this.setCoordY(s2);
  }

}