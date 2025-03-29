import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';  // Importe o Router

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent {
  nome: string = '';
  idade: number = 0;
  aceitoTermos: boolean = false;  // Inicializado com false
  genero: string = '';

  // Injetando MatSnackBar e Router no construtor
  constructor(private snackBar: MatSnackBar, private router: Router) {}



  // Método para salvar os dados
  salvar(form: any) {
    console.log('Formulário válido:', form.valid); 
    console.log('Dados do formulário:', form.value); 

    if (form.valid) {
      // Exibe os dados do formulário no console (exemplo de validação)
      console.log('Nome:', form.value.nome);
      console.log('Idade:', form.value.idade);
      console.log('Aceito os termos:', form.value.aceitoTermos);
      console.log('Gênero:', form.value.genero);

      // Exibe uma mensagem de sucesso
      this.openSnackBar('Dados salvos com sucesso!', 'Fechar');

      // Redireciona para a lista de clientes
      this.router.navigate(['/clientes/lista']);
    } else {
      // Exibe uma mensagem de erro se o formulário não for válido
      this.openSnackBar('Preencha todos os campos corretamente!', 'Fechar');
    }
  }

  // Função para exibir a mensagem de snackbar
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,  // Tempo de exibição da mensagem
    });
  }

  // Função de cancelamento, que também redireciona para a lista
  cancelar() {
    this.router.navigate(['/clientes/lista']);  // Redireciona para a lista de clientes
  }
}
