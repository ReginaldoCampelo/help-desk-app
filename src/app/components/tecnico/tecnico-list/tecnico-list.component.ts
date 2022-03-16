import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'hdk-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {

  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Reginaldo Campelo',
      cpf: '627.627.470-40',
      email: 'reginaldo@mail.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '15/03/2022'
    },
    {
      id: 2,
      nome: 'Natalia Damasceno',
      cpf: '559.839.330-19',
      email: 'nataliapereirausa@gmail.com',
      senha: '1234',
      perfis: ['0'],
      dataCriacao: '15/03/2022'
    }
  ]

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

