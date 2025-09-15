import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements OnInit {
  isMenuOpen = false;
  isLoaded = false;
  isMoreOpen = false;

  menuItems = [
    { label: 'دوره ها', link: '#', svg: '../../../../assets/svg/navbar/dore.svg' },
    { label: 'دسته بندی', link: '#', svg: '../../../../assets/svg/navbar/dastebandi.svg' },
    { label: 'برگزار کنندگان', link: '#', svg: '../../../../assets/svg/navbar/brgzr.svg' },
    { label: 'تماس با ما', link: '#', svg: '../../../../assets/svg/navbar/phone.svg' },
    { label: 'درباره ما', link: '#', svg: '../../../../assets/svg/navbar/about.svg' },
    { label: 'قوانین و مقررات', link: '#', svg: '../../../../assets/svg/navbar/role.svg' },
  ];

  visibleMenuItems = [...this.menuItems];
  hiddenMenuItems: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.isLoaded = true, 100);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMoreMenu() {
    this.isMoreOpen = !this.isMoreOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}