import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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
      fullName: ['',[Validators.minLength(2), Validators.required]],
      email: ['', [Validators.email]],
      skills: this.fb.group({
        skillTitle: [''],
        experienceInYears: [''],
        level: ['']
      })
    })
  }

  save() {
    this.myForm.get('fullName').clearValidators();
    this.myForm.get('fullName').updateValueAndValidity();
    console.log(this.myForm.get('skills.level').value)
  }

  loadData() {
    this.myForm.setValue({
      fullName: 'Afolabi Opakunle',
      email: 'opakunleafolabi@gmail.com',
      skills: {
        experienceInYears: 8,
        skillTitle: 'Angular',
        level: 'advanced'
      }
    })
  }

  changeValidity() {
    this.myForm.get('fullName').setValidators([Validators.required, Validators.minLength(2)]);
    this.myForm.get('fullName').updateValueAndValidity()
  }
}
