import { ClientData } from './../../core/interfaces/client.model';
import { ClientListService } from '../../services/client-list.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/core/interfaces/client.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {  
  displayedColumns: string[] = ['inscription', 'nickname', 'name', 'status'];
  data: Client[] = [];
  data2: Client[] = [];
  data3!: Subscription;
  
  /**
  * @internal
  */
  constructor(
    private clientListService: ClientListService,
    private router: ActivatedRoute
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
  }

  /**
   * Open client details details
   */
   openClientDetails(client: Client): void {
     console.log('client:', client)
    this.clientListService.openClientDetails(client);
  }
}

