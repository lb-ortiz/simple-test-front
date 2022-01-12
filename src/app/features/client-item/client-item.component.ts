import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientListService } from 'src/app/services/client-list.service';

export interface Email {
  occupation: string;
  name: string;
  email: string;
}

@Component({
  selector: 'client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss'],
})
export class ClientItemComponent implements OnInit {
  
  emails = ELEMENT_DATA;

  /**
   * @internal
   */
  constructor(
    private _clientListService: ClientListService,
    private router: Router
  ) {}


  ngOnInit(): void {
    // this.getTransaction();
    // this.getCheckingAccount();
  }

  /**
   * Get Transaction Data from service
   */
  // getTransaction(): void {
  //   this.transactionData = this._clientListService.transaction;
  // }

  /**
   * Get Checking Account from service
   */
  // getCheckingAccount(): void {
  //   this.checkingAccountData = this._clientListService.checkingAccount;
  // }

  /**
   * Back to transaction details
   */
  backList(): void {
    void this.router.navigate(['/client-list']);
  }

}

const ELEMENT_DATA: Email[] = [
  {occupation: 'teste',  name: 'teste 1', email: 'teste@teste'},
  {occupation: 'teste',  name: 'teste 1', email: 'teste@teste'},
  {occupation: 'teste',  name: 'teste 1', email: 'teste@teste'},
  {occupation: 'teste',  name: 'teste 1', email: 'teste@teste'},
  {occupation: 'teste',  name: 'teste 1', email: 'teste@teste'},
  {occupation: 'teste',  name: 'teste 1', email: 'teste@teste'},
  {occupation: 'teste',  name: 'teste 1', email: 'teste@teste'},
  {occupation: 'teste',  name: 'teste 1', email: 'teste@teste'},
  {occupation: 'teste',  name: 'teste 1', email: 'teste@teste'},
];
