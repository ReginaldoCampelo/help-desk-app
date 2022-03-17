import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'hdk-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

  chamado: Chamado = {
    prioridade: '',
    status: '',
    titulo: '',
    observacoes: '',
    tecnico: '',
    cliente: '',
    nomeCliente: '',
    nomeTecnico: ''
  }

  clientes: Cliente[] = []
  tecnicos: Tecnico[] = []

  prioridade: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  titulo: FormControl = new FormControl(null, [Validators.required, Validators.minLength(3)])
  observacoes: FormControl = new FormControl(null, [Validators.required, Validators.minLength(8)])
  tecnico: FormControl = new FormControl(null, [Validators.required])
  cliente: FormControl = new FormControl(null, [Validators.required])

  constructor(private chamadoService: ChamadoService, private clienteService: ClienteService, private tecnicoService: TecnicoService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.findAllClientes();
    this.findAllTecnicos();
  }

  create(): void {
    this.chamadoService.create(this.chamado).subscribe(response => {
      this.toastr.success('Dados cadastrados com sucesso!', 'Chamado');
      this.router.navigate(['chamados']);

    }, ex => {
      this.toastr.error(ex.error.error);
    })
  }

  findAllClientes(): void {
    this.clienteService.findAll().subscribe(response => {
      this.clientes = response;
    })
  }

  findAllTecnicos(): void {
    this.tecnicoService.findAll().subscribe(response => {
      this.tecnicos = response;
    })
  }

  validaCampos(): boolean {
    return this.prioridade.valid && this.status.valid &&
      this.tecnico.valid && this.observacoes.valid && this.tecnico.valid && this.cliente.valid
  }

}
