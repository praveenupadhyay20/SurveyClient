import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-questiondesigning',
  templateUrl: './questiondesigning.component.html',
  styleUrls: ['./questiondesigning.component.scss']
})
export class QuestiondesigningComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  public form: FormGroup;
  public contactList: FormArray;

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      organization: [null],
      contacts: this.fb.array([this.createContact()])
    });
  
  // set contactlist to the form control containing contacts
    this.contactList = this.form.get('contacts') as FormArray;
  }
  createContact(): FormGroup {
    return this.fb.group({
      type: ['text'],
      name: [null],
      value: [null]
    });
  }

  addContact() {
    this.contactList.push(this.createContact());
  }
  removeContact(index) {
    this.contactList.removeAt(index);
  }

  contactFormGroup() {
    return this.form.get('contacts') as FormArray;
  }

  getContactsFormGroup(index): FormGroup {
    this.contactList = this.form.get('contacts') as FormArray;
    const formGroup = this.contactList.controls[index] as FormGroup;
    return formGroup;
  }
  changedContactType(index) {
    let validators = null;
  
  if (this.getContactsFormGroup(index).controls['type'].value === 'email') {
      validators = Validators.compose([Validators.required, Validators.email]);
    } else {
      validators = Validators.compose([
        Validators.required,
        Validators.pattern(new RegExp('^\\\+[0-9]?()[0-9](\d[0-9]{9})\$')) // pattern for validating international phone number
      ]);
    }
  
  this.getContactsFormGroup(index).controls['value'].setValidators(validators);
  
  // re-validate the inputs of the form control based on new validation
    this.getContactsFormGroup(index).controls['value'].updateValueAndValidity();
  }
}
