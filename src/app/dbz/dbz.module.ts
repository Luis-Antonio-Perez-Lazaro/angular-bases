import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.componet';



@NgModule({
  exports: [
    MainPageComponent
  ],
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class DbzModule { }
