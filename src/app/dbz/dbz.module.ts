import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.componet';
import { ListComponent } from './components/list/list.component';
import { CharactersComponent } from './components/add-character/add-character.component';



@NgModule({
  exports: [
    MainPageComponent
  ],
  declarations: [
    MainPageComponent,
    ListComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DbzModule { }
