import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      fullName: [''],
      email: [''],
      skills: this.fb.group({
        skillTitle: [''],
        experienceInYears: [''],
        level: ['']
      })
    })
  }

  save() {
    console.log(this.myForm.value)
  }

  loadData() {

  }
}
