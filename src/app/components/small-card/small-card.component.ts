import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent {
  @Input()
  photoCover:string = "https://i.ytimg.com/vi/jcrpdJA9U2Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDGmxP8mKOUUcGE8wHvO4AfkSjjRA"

  @Input()
  cardTitle:string = "O Java 21 chegou com novos recursos que facilitam o desenvolvimento, como os record patterns e melhorias no switch com pattern matching. Além disso, há otimizações no desempenho e avanços no suporte a aplicações nativas com o Project Leyden, aproximando o Java ainda mais de cenários modernos de microsserviços e cloud."
}
