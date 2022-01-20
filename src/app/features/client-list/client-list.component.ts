import { ClientListService } from '../../services/client-list.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/core/interfaces/client.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {  
  /**
   * Columns
   */
  @ViewChild('paginator') paginator!: MatPaginator;

  /**
   * Columns
   */
  displayedColumns: string[] = ['inscription', 'nickname', 'name', 'status'];

  /**
   * Client list
   */
  data: Client[] = [];

  /**
   * Data Source for paginator
   */
  dataSource!: MatTableDataSource<Client>;

  /**
   * @internal
   */
  constructor(
    private clientListService: ClientListService,
  ) {}

  /**
   * @internal
   */
  ngOnInit(): void {
    this.searchClients();
  }

  /**
   * Search clients
   */
  searchClients(): void {
    this.clientListService.getClientList()
    .subscribe((response: Client[]) => this.populateData(response));
  }

  /**
   * Populate 
   * @param response: ClientData
   */
  populateData(response: Client[]): void {
      this.data = response;
      this.dataSource = new MatTableDataSource<Client>(response);
  }

  /**
   * Open client details details
   */
   openClientDetails(client: Client): void {
    this.clientListService.openClientDetails(client);
  }
}

