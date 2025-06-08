import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  navbarVisible: boolean = true;
  lastScrollTop = 0;

  toggleDropdownMenu() {
    let menu: HTMLElement | null = document.getElementById("dropdown-menu");
  
    if (menu) {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    this.navbarVisible = scrollTop < this.lastScrollTop || scrollTop === 0;
    this.lastScrollTop = scrollTop;
  }
  
}
