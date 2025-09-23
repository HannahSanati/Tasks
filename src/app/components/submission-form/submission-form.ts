import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { Form } from "./form/form";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-submission-form',
  imports: [RouterModule, Form, CommonModule],
  templateUrl: './submission-form.html',
  styleUrl: './submission-form.scss'
})
export class SubmissionForm {

}
