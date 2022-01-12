// import { BreadcrumbMenuModule } from '../../core/components/breadcrumb-menu/breadcrumb-menu.module';
import { ClientItemModule } from '../../features/client-item/client-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientItemPageComponent } from './client-item-page.component';
import { ClientItemPageRoutingModule } from './client-item-page.routing.module';
@NgModule({
  declarations: [ClientItemPageComponent],
  imports: [
    CommonModule,
    ClientItemModule,
    ClientItemPageRoutingModule,
  ],
})
export class ClientItemPageModule {}
