import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WikiComponent } from './wiki.component';

@NgModule({
  declarations: [ WikiComponent ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    RouterModule],
  exports: [WikiComponent]
})
export class WikiComponentModule { }
