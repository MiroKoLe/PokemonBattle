import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BattlePageComponent } from './battle-page/battle-page.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule} from '@angular/material/toolbar';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    BattlePageComponent,
    IntroPageComponent,
    SiteHeaderComponent,
    PokemonListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule, 
    HttpClientModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
