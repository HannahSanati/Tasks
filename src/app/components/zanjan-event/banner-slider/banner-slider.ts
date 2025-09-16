import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-slider',
  imports:[CommonModule],
  templateUrl: './banner-slider.html',
  styleUrls: ['./banner-slider.scss']
})
export class BannerSlider {
  slides = [
    'svg/singlr-page/banner.png',
    'svg/singlr-page/banner2.png',
  ];
}