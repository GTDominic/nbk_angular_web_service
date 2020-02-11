import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';

// base line for new routes:
// { path: '', component:  }
const routes: Routes = [
  { path: '', redirectTo: '/willkommen', pathMatch: 'full' },
  { path: 'willkommen', component:  StartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
