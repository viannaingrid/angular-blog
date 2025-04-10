import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent {
  @Input()
  photoCover:string = "https://blog.appicompany.com/wp-content/uploads/2024/01/Angular-new.png"

  @Input()
  cardTitle:string = "Atualizações sobre o framework Angular"

  @Input()
  cardDescription:string = "O Angular tem recebido atualizações constantes que melhoram o desempenho, a segurança e a experiência do desenvolvedor. As versões mais recentes trazem melhorias na renderização com o Angular Ivy, suporte aprimorado a TypeScript e otimizações para aplicações mais rápidas e leves. Essas evoluções tornam o Angular cada vez mais eficiente para o desenvolvimento de interfaces modernas."
}
