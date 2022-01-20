import { Client, Email } from './../../core/interfaces/client.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientListService } from 'src/app/services/client-list.service';


@Component({
  selector: 'client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss'],
})
export class ClientItemComponent implements OnInit {
  
  clientData!: Client
  
  emails: Email[] = [];

  /**
   * @internal
   */
  constructor(
    private _clientListService: ClientListService,
    private router: Router,

    ) {}

  /**
   * @internal
   */
  ngOnInit(): void {
    this.getClient();
  }


  /**
   * Get client Data from service
   */
   getClient(): void {
    this.clientData = this._clientListService.client;
  }

  /**
   * Back to client details
   */
  backList(): void {
    void this.router.navigate(['/client-list']);
  }

  /**
   * delete client
   */
   deleteClient(): void {
    this._clientListService.deleteRequest(this.clientData.id).subscribe(() => {
      void this.router.navigate(['/client-list']);
    });
  }

  
}
