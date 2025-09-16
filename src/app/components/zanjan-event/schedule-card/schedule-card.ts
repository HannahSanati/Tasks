import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-card',
  imports: [DatePipe, CommonModule],
  templateUrl: './schedule-card.html',
  styleUrl: './schedule-card.scss'
})
export class ScheduleCard implements OnInit {
  startDate = new Date(2024, 9, 16); // 16 مهر 1403
  endDate = new Date(2024, 9, 18);   // 18 مهر 1403
  startTime = '۲۱:۰۰';
  endTime = '۲۱:۰۰';

  weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
  monthName = 'مهر';
  year = '۱۴۰۳';

  today = 15; 
  days: number[] = [];
  activeDays = [14, 15, 16, 18];

  ngOnInit() {
    this.generateDays(31); 
  }

  generateDays(total: number) {
    this.days = Array.from({ length: total }, (_, i) => i + 1);
  }
}