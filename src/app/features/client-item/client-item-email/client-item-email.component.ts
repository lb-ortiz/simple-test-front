import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { Email } from 'src/app/core/interfaces/client.model';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'email-list',
  templateUrl: './client-item-email.component.html',
  styleUrls: ['./client-item-email.component.scss'],
})
export class EmailListComponent implements OnInit {  
  displayedColumns: string[] = ['occupation', 'name', 'email', 'edit', 'delete'];
  
  @Input()
  data: Email[] = [];

  occupation!: string;
  name!: string;
  email!: string;
 
  
  /**
  * @internal
  */
  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
  }


  /**
   * Back to transaction details
   */
   deleteEmail(): void {
    void this.router.navigate(['/client-list/item']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: {occupation: this.occupation, name: this.name, email: this.email},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.occupation = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Email,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

