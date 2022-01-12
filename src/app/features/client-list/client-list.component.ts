import { ClientListService } from '../../services/client-list.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Client {
  nickname: string;
  inscription: string;
  name: string;
  status: string;
}

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {  
  displayedColumns: string[] = ['inscription', 'nickname', 'name', 'status'];
  data = new MatTableDataSource<Client>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
  }
  /**
  * @internal
  */
  constructor(private clientListService: ClientListService) {}

  ngOnInit(): void {}

  /**
   * Open client details details
   */
   openClientDetails(client: Client): void {
    this.clientListService.openClientDetails(client);
  }
}




const ELEMENT_DATA: Client[] = [
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
  {inscription: '111111111111111111111', nickname: 'teste a', name: 'teste', status: 'Ativo'},
];
