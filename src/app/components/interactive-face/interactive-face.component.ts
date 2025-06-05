import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interactive-face',
  standalone: true,
  templateUrl: './interactive-face.component.html',
  styleUrls: ['./interactive-face.component.css'],
  imports: [CommonModule]
})
export class InteractiveFaceComponent implements AfterViewInit {
  faceImages = [
    'assets/imgs/homepage/face-neutral.svg',
    'assets/imgs/homepage/face-surprised.svg',
    'assets/imgs/homepage/face-smirk.svg'
  ];
  currentFaceIndex = 0;
  mouseX = 0;
  mouseY = 0;

  eyeballs!: NodeListOf<HTMLElement>;
  mouth!: HTMLElement;
  nose!: HTMLElement;

  animationFrameId: number | null = null;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.eyeballs = this.el.nativeElement.querySelectorAll('.eyeball');
    this.mouth = this.el.nativeElement.querySelector('#mouth');
    this.nose = this.el.nativeElement.querySelector('#nose');
  }

  toggleFace() {
    this.currentFaceIndex = (this.currentFaceIndex + 1) % this.faceImages.length;
  }


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (window.innerWidth < 768) return;

    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    if (!this.animationFrameId) {
      this.animationFrameId = requestAnimationFrame(() => {
        this.updateFace();
        this.animationFrameId = null; // Reset after execution
      });
    }
  }


  updateFace() {
    this.eyeballs.forEach((eye) => {
      const [xe, ye] = this.getTranslationCoords(eye);
      eye.style.cssText = `transform: translate(${xe * 2}px, ${ye}px);`;
    });

    if (this.mouth) {
      const [xn, yn] = this.getTranslationCoords(this.mouth);
      this.mouth.style.cssText = `transform: translate(0px, ${yn * 0.5}px);`;
      this.mouth.setAttribute("d", `M120,170 Q155,${190 + yn % 90} 190,170`);
    }

    if (this.nose) {
      const [_, yn] = this.getTranslationCoords(this.nose);
      this.nose.style.cssText = `transform: translate(0px, ${yn * 0.9}px);`;
    }
  }


  getTranslationCoords(sthing: HTMLElement) {
    const rect = sthing.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = this.mouseX - centerX;
    const dy = this.mouseY - centerY;
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(5, Math.hypot(dx, dy) / 20);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    return [x, y];
  }
}
