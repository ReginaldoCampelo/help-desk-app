import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'hdk-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }

  nome: FormControl = new FormControl(null, [Validators.minLength(3), Validators.maxLength(30), Validators.required]);
  cpf: FormControl = new FormControl(null, [Validators.minLength(11), Validators.maxLength(14), Validators.required]);
  email: FormControl = new FormControl(null, [Validators.email, Validators.minLength(12), Validators.maxLength(50)]);
  senha: FormControl = new FormControl(null, [Validators.minLength(6), Validators.maxLength(25), Validators.required]);

  constructor(private service: TecnicoService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  
  create(): void {
    this.service.create(this.tecnico).subscribe(() => {
      this.toastr.success('Técnico cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['tecnicos']);
    }, ex => {
      if(ex.error.erros) {
        ex.error.erros.forEach(element => {
          this.toastr.error(element.message);
        });
      } else {
        this.toastr.error(ex.error.message);
      }
    })
  }

  addPerfil(perfil: any): void {
    
    
    if(this.tecnico.perfis.includes(perfil)) {
      this.tecnico.perfis.splice(this.tecnico.perfis.indexOf(perfil), 1);
    } else {
      this.tecnico.perfis.push(perfil);
    }
  }
  
  validarCampos(): boolean {
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid;
  }
}
