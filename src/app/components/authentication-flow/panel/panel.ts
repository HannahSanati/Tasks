import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  imports: [CommonModule],
  templateUrl: './panel.html',
  styleUrl: './panel.scss'
})
export class Panel {
  constructor(private router: Router) {}
}
