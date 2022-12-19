import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from 'src/app/core/components/search/search.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    SearchComponent,
  ],
  exports: [
    SearchComponent,
  ],
})

export class ComponentsModule { }
