import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { LeftComponent } from './pages/left/left.component';
import { RightComponent } from './pages/right/right.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { animation: 'isRight' } },
  { path: 'right', component: RightComponent, data: { animation: 'isRight' } },
  {
    path: 'left',
    component: LeftComponent,
    data: { animation: 'isLeft' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
