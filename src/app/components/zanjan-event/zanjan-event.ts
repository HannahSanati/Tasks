import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { ScheduleCard } from "./schedule-card/schedule-card";
import { Followers } from "./followers/followers";
import { BannerSlider } from "./banner-slider/banner-slider";

@Component({
  selector: 'app-zanjan-event',
  imports: [Navbar, ScheduleCard, Followers, BannerSlider],
  templateUrl: './zanjan-event.html',
  styleUrl: './zanjan-event.scss'
})
export class ZanjanEvent  {}