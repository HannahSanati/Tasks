import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-card.html',
  styleUrl: './event-card.scss'
})
export class EventCard {
  eventcards = [
    {
      imagePath1: 'svg/event-card/uni.svg',
      imagePath2: 'svg/event-card/book.svg',
      title: 'مدرک معتبر',
      text: 'با چند کلیک ساده',
      bgColor: '#DDF2FF',
    },
    {
      imagePath1: 'svg/event-card/uni.svg',
      imagePath2: 'svg/event-card/book.svg',
      title: 'مدرک معتبر',
      text: 'با چند کلیک ساده',
      bgColor: '#DDF2FF',
    },
    {
      imagePath1: 'svg/event-card/uni.svg',
      imagePath2: 'svg/event-card/book.svg',
      title: 'مدرک معتبر',
      text: 'با چند کلیک ساده',
      bgColor: '#DDF2FF',
    },
    {
      imagePath1: 'svg/event-card/uni.svg',
      imagePath2: 'svg/event-card/book.svg',
      title: 'مدرک معتبر',
      text: 'با چند کلیک ساده',
      bgColor: '#DDF2FF',
    },
    {
      imagePath1: 'svg/event-card/uni.svg',
      imagePath2: 'svg/event-card/book.svg',
      title: 'مدرک معتبر',
      text: 'با چند کلیک ساده',
      bgColor: '#DDF2FF',
    },
    {
      imagePath1: 'svg/event-card/uni.svg',
      imagePath2: 'svg/event-card/book.svg',
      title: 'مدرک معتبر',
      text: 'با چند کلیک ساده',
      bgColor: '#DDF2FF',
    },
  ];
  
}
