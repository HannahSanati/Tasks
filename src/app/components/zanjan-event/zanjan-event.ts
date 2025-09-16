import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { ScheduleCard } from './schedule-card/schedule-card';
import { Followers } from './followers/followers';
import { BannerSlider } from './banner-slider/banner-slider';
import { Description } from './description/description';
import { CourseTeacher } from './course-teacher/course-teacher';
import { CoursePrerequisites } from './course-prerequisites/course-prerequisites';
import { CourseSchedule } from './course-schedule/course-schedule';
import { FaqCard } from './faq-card/faq-card';
import { CostCard } from './cost-card/cost-card';
import { Footer } from './footer/footer';
import { EventCard } from './event-card/event-card';
import { CourseCards } from "./course-cards/course-cards";

@Component({
  selector: 'app-zanjan-event',
  imports: [
    Navbar,
    ScheduleCard,
    Followers,
    BannerSlider,
    Description,
    CourseTeacher,
    CoursePrerequisites,
    CourseSchedule,
    FaqCard,
    CostCard,
    Footer,
    EventCard,
    CourseCards
],
  templateUrl: './zanjan-event.html',
  styleUrl: './zanjan-event.scss',
})
export class ZanjanEvent {}
