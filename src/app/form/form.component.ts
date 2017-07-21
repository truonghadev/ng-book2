import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import {} from './validations';

function skuValidator(control: FormControl): {[s: string]: boolean} {
  if(!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  productName: string;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['Truong', Validators.compose([Validators.required, skuValidator])],
      'description': [123],
      'productName': ['', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) => {
      console.log('Sku changed to: ', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('Form changed to: ', form);
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log(form, this.sku);
  }

}
