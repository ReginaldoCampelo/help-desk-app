import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from "@angular/router";

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Componentes do projeto
import { ToastrModule } from 'ngx-toastr';

// Imports para componentes do Angular Material
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,

    // Toastr de Mensagens
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),

    // iMask do CPF
    NgxMaskModule.forRoot(),

    MatButtonModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,

    // Requisições HTTP
    HttpClientModule,

     // Angular Material
     MatButtonModule,
     MatCardModule,
     MatIconModule,
     MatRadioModule,
     MatSelectModule,
     MatToolbarModule,
     MatCheckboxModule,
     MatPaginatorModule,
     MatFormFieldModule,
     MatSnackBarModule,
     MatInputModule,
     MatSidenavModule,
     MatListModule,
     MatTableModule
     
  ],
  exports: [
    
    // shared modules
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxMaskModule,

    // shared angular material modules
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,

    // shared components
    
  ]
})
export class CoreModule { }
