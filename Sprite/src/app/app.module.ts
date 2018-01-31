import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SpriteComponent } from './sprite.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
  	SpriteComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
