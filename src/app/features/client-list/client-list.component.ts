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
  @ViewChild('paginator') paginator!: MatPaginator;

  displayedColumns: string[] = ['inscription', 'nickname', 'name', 'status'];
  data: Client[] = [];
  dataSource!: MatTableDataSource<Client>;

  /**
  * @internal
  */
  constructor(
    private clientListService: ClientListService,
  ) {}

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
      this.dataSource = new MatTableDataSource<Client>(this.data);
      console.log(this.dataSource)
      this.dataSource.paginator = this.paginator;
  }

  /**
   * Open client details details
   */
   openClientDetails(client: Client): void {
    this.clientListService.openClientDetails(client);
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
}
}

