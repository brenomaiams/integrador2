import { Component } from '@angular/core';

@Component({
  selector: 'app-material-card',
  standalone: false,
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.scss'
})
export class MaterialCardComponent {
  cards = [
    {
      title: 'Santos',
      subtitle: 'Maior do Mundo',
      image: 'https://a.espncdn.com/i/teamlogos/soccer/500/2674.png',
      content: 'Este é o conteúdo do primeiro card com Angular Material.',
      icon: 'favorite',
      likes: 0,
      shares: 0
    },
    {
      title: 'Palmeiras',
      subtitle: 'Sem mundial',
      image: 'https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2024/09/escudo-palmeiras-aspect-ratio-512-320.jpg',
      content: 'Aqui temos o segundo card demonstrando o uso de *ngFor.',
      icon: 'star',
      likes: 0,
      shares: 0
    },
    {
      title: 'São Paulo',
      subtitle: 'Pablo Vittar',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/1200px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png',
      content: 'Mais um exemplo de card com interações personalizadas.',
      icon: 'thumb_up',
      likes: 0,
      shares: 0
    }
  ];

  // Método para curtir
  likeCard(card: any) {
    card.likes++;
    console.log(`Card "${card.title}" curtido! Total: ${card.likes}`);
  }

  // Método para compartilhar
  shareCard(card: any) {
    card.shares++;
    console.log(`Card "${card.title}" compartilhado! Total: ${card.shares}`);
  }
}
