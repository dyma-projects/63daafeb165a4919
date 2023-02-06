import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css'],
})
export class Exercice1Component {
  public valueInput: string = 'Je vais du component au HTML';
  public imageKitty: string = 'https://placekitten.com/300/300';
  public interpolation: string =
    'Je suis une interpolation de mon component.ts';

  public changeImage(): void {
    this.imageKitty = 'https://placekitten.com/330/320';
  }
}
