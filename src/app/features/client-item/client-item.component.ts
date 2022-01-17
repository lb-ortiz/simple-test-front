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

  // /**
  //  * Id
  //  */
  // get id(): string {
  //   const id = this._activatedRoute.snapshot.paramMap.get('id');
  //   return id ?? '';
  // }

  /**
   * @internal
   */
  constructor(
    private _clientListService: ClientListService,
    private router: Router,
    private _activatedRoute: ActivatedRoute

    ) {}


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
    void this.router.navigate(['/client-list']);
  }

  /**
   * Back to transaction details
   */
  saveClient(): void {
    void this.router.navigate(['/client-list/item']);
  }

  /**
   * Back to transaction details
   */
   deleteEmail(): void {
    void this.router.navigate(['/client-list/item']);
  }
}
