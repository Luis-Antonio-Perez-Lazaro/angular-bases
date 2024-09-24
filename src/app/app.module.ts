import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';

// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeroComponent,
    // ListComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
