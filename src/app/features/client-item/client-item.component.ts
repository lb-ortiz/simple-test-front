import { Client, Email } from './../../core/interfaces/client.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private _activatedRoute: ActivatedRoute,
    private router: Router,

    ) {}

  /**
   * @internal
   */
  ngOnInit(): void {
    this.getClient();
  }


  /**
   * Get Transaction Data from service
   */
   getClient(): void {
    this.clientData = this._clientListService.client;
    this.emails = this._clientListService.client.emails;
  }

  /**
   * Back to transaction details
   */
  backList(): void {
    void this.router.navigate(['/client-list']);
  }

  /**
   * Back to transaction details
   */
   deleteClient(): void {
    console.log('esse cliente aqui o', this.clientData.id);
    this._clientListService.deleteRequest(this.clientData.id).subscribe(() => {
      void this.router.navigate(['/client-list']);
    });
  }
}
