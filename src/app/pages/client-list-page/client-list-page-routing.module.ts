import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListPageComponent } from './client-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientListPageRoutingModule {}
