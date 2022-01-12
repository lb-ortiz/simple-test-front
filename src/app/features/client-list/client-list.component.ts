import { ClientListService } from '../../services/client-list.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {  
  displayedColumns: string[] = ['inscription', 'nickname', 'name', 'status'];
  data = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
  }
  /**
  * @internal
  */
  constructor(private clientListService: ClientListService) {}

  ngOnInit(): void {}
}


export interface PeriodicElement {
  nickname: string;
  inscription: string;
  name: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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
