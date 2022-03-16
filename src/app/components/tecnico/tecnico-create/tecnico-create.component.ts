import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'hdk-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  nome: FormControl = new FormControl(null, [Validators.minLength(3), Validators.maxLength(30), Validators.required]);
  cpf: FormControl = new FormControl(null, [Validators.minLength(11), Validators.maxLength(14), Validators.required]);
  email: FormControl = new FormControl(null, [Validators.email, Validators.minLength(12), Validators.maxLength(50)]);
  senha: FormControl = new FormControl(null, [Validators.minLength(6), Validators.maxLength(25), Validators.required]);

  constructor() { }

  ngOnInit(): void {
  }

  validarCampos(): boolean {
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid;
  }

}
