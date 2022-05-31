import { IntroPageComponent } from './intro-page/intro-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattlePageComponent } from './battle-page/battle-page.component';

const routes: Routes = [
  {path:'', redirectTo: '/introPage', pathMatch: 'full'},
  {path:'introPage', component: IntroPageComponent},
  {path:'battlePage', component: BattlePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
