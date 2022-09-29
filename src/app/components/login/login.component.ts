import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'hdk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    email: 'admin@helpdesk.com',
    senha: 'unique'
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(6));

  constructor(private toast: ToastrService, private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logar() {
    this.service.authenticate(this.creds).subscribe(response => {
      this.service.successfulLogin(response.headers.get('Authorization').substring(7));
      this.toast.success('Usuário logado com sucesso!', 'Login');
      this.router.navigate(['']);
    }, () => {
      this.toast.error('Usuário ou senha inválidos!', 'Login');
      this.creds.senha = '';
    })
  }

  validarCampos(): boolean {
    return this.email.valid && this.senha.valid;
  }



}
