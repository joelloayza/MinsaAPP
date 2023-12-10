import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  scheduleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.scheduleForm = this.formBuilder.group({
      paciente: ['', Validators.required],
      dni: ['', Validators.required],
      fecha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
	    comentarios: ['']
    });
  }

  onSubmit() {
    if (this.scheduleForm.valid) {
      console.log(this.scheduleForm.value);
    } else {
    }
  }
}