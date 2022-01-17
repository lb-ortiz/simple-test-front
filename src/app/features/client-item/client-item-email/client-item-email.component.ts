import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Email } from 'src/app/core/interfaces/client.model';
import { Router } from '@angular/router';



@Component({
  selector: 'email-list',
  templateUrl: './client-item-email.component.html',
  styleUrls: ['./client-item-email.component.scss'],
})
export class EmailListComponent implements OnInit {  
  displayedColumns: string[] = ['occupation', 'name', 'email', 'edit', 'delete'];
  
  @Input()
  data: Email[] = [];
 
  
  /**
  * @internal
  */
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }


  /**
   * Back to transaction details
   */
   deleteEmail(): void {
    void this.router.navigate(['/client-list/item']);
  }
}

