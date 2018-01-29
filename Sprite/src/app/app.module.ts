import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SpriteComponent } from './sprite.component';
//import { SpriteBtnComponent } from './sprite-btn.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ SpriteComponent,
  ],
  providers: [],
  bootstrap: [SpriteComponent]
})
export class AppModule { }
