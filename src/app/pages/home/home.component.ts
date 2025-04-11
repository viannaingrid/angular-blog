import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  newsbig = [{
    photoCover: "https://blog.appicompany.com/wp-content/uploads/2024/01/Angular-new.png",
    cardTitle: "Atualizações sobre o framework 🅰️ Angular",
    cardDescription: "O Angular tem recebido atualizações constantes que melhoram o desempenho, a segurança e a experiência do desenvolvedor. As versões mais recentes trazem melhorias na renderização com o Angular Ivy, suporte aprimorado a TypeScript e otimizações para aplicações mais rápidas e leves. Essas evoluções tornam o Angular cada vez mais eficiente para o desenvolvimento de interfaces modernas."
  }]

  newsSmall = [{
    photoCover: "https://i.ytimg.com/vi/jcrpdJA9U2Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDGmxP8mKOUUcGE8wHvO4AfkSjjRA",
    CardTitle: "O Java 21 chegou com novos recursos que facilitam o desenvolvimento, como os record patterns e melhorias no switch com pattern matching. Além disso, há otimizações no desempenho e avanços no suporte a aplicações nativas com o Project Leyden, aproximando o Java ainda mais de cenários modernos de microsserviços e cloud."
  },
  {
    photoCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2bKkZLhRSME0YlqSIPSN6AIu-PC0AP_EF6g&s",
    CardTitle: "Recentes atualizações no JavaScript, como a proposta Array.prototype.toSorted(), trouxeram formas mais seguras e funcionais de manipular arrays. A linguagem segue evoluindo com foco em imutabilidade e legibilidade, alinhando-se a práticas modernas de desenvolvimento web."
  },
  {
    photoCover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu95IFSoebbGwfNXY28OgWDW6r7ygxxfW6dA&s",
    CardTitle: "Atualizações em bancos de dados como o PostgreSQL e o MySQL vêm otimizando o uso de SQL com melhorias em desempenho, análise de consultas e novos tipos de dados. Além disso, há mais foco em segurança e suporte a consultas paralelas, tornando o SQL mais eficiente em ambientes de grande escala."
  }]
}
