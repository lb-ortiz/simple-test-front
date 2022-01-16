import { ClientData } from './../../core/interfaces/client.model';
import { ClientListService } from '../../services/client-list.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/core/interfaces/client.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {  
  displayedColumns: string[] = ['inscription', 'nickname', 'name', 'status'];
  data!: Client[];
  data2!: ClientData;
  
  /**
  * @internal
  */
  constructor(
    private clientListService: ClientListService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.data2 = this.clientListService.getClientList();
    console.log('data2:', this.data2)
    this.searchClients();
  }

  /**
   * Search clients
   */
  searchClients(): void {
    this.clientListService.getClientList()
    .subscribe((response: ClientData) => this.populateData(response));
  }

  /**
   * Populate 
   * @param response: ClientData
   */
  populateData(response: ClientData): void {
    if(response){
      this.data = response?.clients;
    }
    console.log('populate:', this.data);
  }

  /**
   * Open client details details
   */
   openClientDetails(client: Client): void {
    this.clientListService.openClientDetails(client);
  }
}

