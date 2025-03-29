import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent {
  nome: string = '';
  idade: number = 0;
  aceitoTermos: boolean = false;
  genero: string = '';

  constructor(private snackBar: MatSnackBar) {}

  salvar(form: any) {
    console.log('Formulário válido:', form.valid); 
    console.log('Dados do formulário:', form.value); 

    if (form.valid) {
      
      console.log('Nome:', form.value.nome);
      console.log('Idade:', form.value.idade);
      console.log('Aceito os termos:', form.value.aceitoTermos);
      console.log('Gênero:', form.value.genero);
      this.openSnackBar('Dados salvos com sucesso!', 'Fechar');
    } else {
      this.openSnackBar('Preencha todos os campos corretamente!', 'Fechar');
    }
  }

  openSnackBar(message: string, action: string) {
    
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
