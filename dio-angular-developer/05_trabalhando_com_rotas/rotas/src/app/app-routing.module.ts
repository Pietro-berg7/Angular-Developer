import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
  // portfolio
  {
    path: 'portfolio',
    component: CardComponent,
    children: [
      // portfolio/1
      { path: ':id', component: CardComponent },
      // portfolio/1/abc
      { path: ':id/:token', component: CardComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
