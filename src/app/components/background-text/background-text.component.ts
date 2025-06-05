import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background-text',
  standalone: true,
  templateUrl: './background-text.component.html',
  styleUrls: ['./background-text.component.css'],
  imports: [CommonModule]
})
export class BackgroundTextComponent {
  allSentences = [
    "Est-ce que je suis payé pour faire semblant d’y croire, ou pour vraiment y croire ?",
    "Suis-je en CDI ou en captivité à durée indéterminée ?",
    "Est-ce une vaste simulation orchestrée par RH pour étudier la résilience passive ?",
    "Est-ce qu’on nous appelle “collaborateurs” parce que “prisonniers” sonnait dur ?",
    "Pourquoi est-ce que je souris poliment quand on me dit “bon courage” à 9h ?",
  ];
  
  visibleSentences: { text: string, top: number }[] = [];

  constructor() {
    this.changeSentences();
    setInterval(() => this.changeSentences(), 10000);
  }

  changeSentences() {
    this.visibleSentences = this.shuffleArray(this.allSentences)
      .slice(0, Math.floor(Math.random() * 3) + 1)
      .map(sentence => ({
        text: sentence,
        top: Math.random() * 80 + 10 // Ensures sentences appear randomly but not too close
      }));
  }

  shuffleArray(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }
}
