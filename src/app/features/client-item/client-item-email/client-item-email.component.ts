import { Client } from './../../../core/interfaces/client.model';
import { EmailService } from './../../../services/email.service';
import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Email } from 'src/app/core/interfaces/client.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientListService } from 'src/app/services/client-list.service';


@Component({
  selector: 'email-list',
  templateUrl: './client-item-email.component.html',
  styleUrls: ['./client-item-email.component.scss'],
})
export class EmailListComponent implements OnInit, OnDestroy {  
  displayedColumns: string[] = ['occupation', 'name', 'email', 'edit', 'delete'];
  
  @Input()
  data!: Client;
  emailList: Email[] = [];

  emailObj!: Email;
  occupation!: string;
  name!: string;
  email!: string;
  subscription: any;
  
 
  
  /**
  * @internal
  */
  constructor(
    public dialog: MatDialog,
    private _emailService: EmailService,
    private _clientService: ClientListService

  ) {}

  ngOnInit(): void {
    this.emailList = this.data.emails;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  refresh(): void {
    window.location.reload();
  }

  /**
   * Back to client details
   */
  deleteEmail(id: number): void {
    this.subscription = this._emailService.deleteRequest(id).subscribe(() => {
      this.refresh();
     });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEmailDialog, {
      width: '500px',
      data: {occupation: this.occupation, name: this.name, email: this.email},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.email != null) {
        this.occupation = result.occupation;
        this.name = result.name;
        this.email = result.email;
        this.emailObj = {
          name: this.name,
          email: this.email,
          occupation: this.occupation,
          idClient: this._clientService.client.id
        }; 
        this.addEmail(this.emailObj);
        this.refresh();
      }
    });
  }

  /**
   * add email
   */
  addEmail(email: Email): void {
    this._emailService.addRequest(email).subscribe(() => {
    });
  }
}

@Component({
  selector: 'dialog-email',
  templateUrl: './dialog-email.html',
})
export class DialogEmailDialog {
  
  emailObj!: Email;


  constructor(
    public dialogRef: MatDialogRef<DialogEmailDialog>,
    private _emailService: EmailService,
    @Inject(MAT_DIALOG_DATA) public data: Email,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

