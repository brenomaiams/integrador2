import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatRadioModule } from '@angular/material/radio'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './features/clientes/lista/lista-clientes/lista-clientes.component';
import { CadastrarComponent } from './cliente/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatCheckboxModule, 
    MatRadioModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }