import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientListPageRoutingModule } from './client-list-page-routing.module';
import { ClientListPageComponent } from './client-list-page.component';
import { ClientListModule } from 'src/app/features/client-list/client-list.module';

@NgModule({
  declarations: [ClientListPageComponent],
  imports: [
    CommonModule,
    ClientListPageRoutingModule,
    ClientListModule
  ],
})
export class ClientListPageModule {}
