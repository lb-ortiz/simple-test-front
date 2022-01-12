import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ClientListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [ClientListComponent],
})
export class ClientListModule {}
