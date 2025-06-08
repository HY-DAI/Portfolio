import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  isDropdownOpen = false;

  lastScrollTop = 0;
  navbarVisible = true;
  
  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // } 
  
  toggleDropdownMenu() {
    let menu: HTMLElement | null = document.getElementById("dropdown-menu");
  
    if (menu) {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
  }
  

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.scrollY;
    this.navbarVisible = scrollTop < this.lastScrollTop || scrollTop === 0 ;
    this.lastScrollTop = scrollTop;
  }
}
