import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'client-list',
    loadChildren: () =>
      import('./pages/client-list-page/client-list-page.module').then(
        m => m.ClientListPageModule
      ),
  },
  { path: '', redirectTo: 'client-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
