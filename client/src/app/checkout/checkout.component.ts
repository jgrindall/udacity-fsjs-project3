import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import {AuthService} from "../auth.service";
import {LoginComponent} from "../login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {SignupComponent} from "../signup/signup.component";
import {AuthInfo} from "../types";
import {CheckoutDialogComponent} from "../checkout-dialog/checkout-dialog.component";

const MIN_LENGTH = 3;
const MAX_LENGTH = 32;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  isLoggedIn:boolean = false;

  fields:Record<number, string[]>;

  fieldLabels:Record<string, string>;

  months:string[] = [
    "01",
    "02",
    "03"
  ];

  years:string[] = [
    "2021",
    "2022",
    "2023",
    "2024",
    "2025"
  ];

  countries:string[] = [
    "United Kingdom",
    "United States of America",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "Uganda",
    "Uruguay",
    "Uzbekistan"
  ];

  formGroup: FormGroup;

  constructor(private authService:AuthService, public dialog: MatDialog, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      address1: [
        '',
        [
          Validators.required,
          Validators.minLength(MIN_LENGTH),
          Validators.maxLength(MAX_LENGTH)
        ]
      ],
      address2: [''],
      city: ['',
        [
          Validators.required,
          Validators.minLength(MIN_LENGTH),
          Validators.maxLength(MAX_LENGTH)
        ]
      ],
      zip: ['',
        [
          Validators.required,
          Validators.minLength(MIN_LENGTH),
          Validators.maxLength(MAX_LENGTH)
        ]
      ],
      state: ['',
        [
          Validators.required,
          Validators.minLength(MIN_LENGTH),
          Validators.maxLength(MAX_LENGTH)
        ]
      ],
      country: ['',
        [
          Validators.required,
          Validators.minLength(MIN_LENGTH),
          Validators.maxLength(MAX_LENGTH)
        ]
      ],
      card:['',
        [
          Validators.required,
          Validators.minLength(MIN_LENGTH),
          Validators.maxLength(MAX_LENGTH)
        ]
      ],
      name:['',
        [
          Validators.required,
          Validators.minLength(MIN_LENGTH),
          Validators.maxLength(MAX_LENGTH)
        ]
      ],
      month:['',
        [
          Validators.required
        ]
      ],
      year:['',
        [
          Validators.required
        ]
      ]
    });

    this.fields = {
      1:[
        "address1",
        "address2",
        "city",
        "zip",
        "state",
        "country"
      ],
      2:[
        "card",
        "name",
        "month",
        "year"
      ]
    };

    this.fieldLabels = {
      "address1": "Address 1",
      "address2": "Address 2",
      "city": "City",
      "zip": "ZIP/Post code",
      "state": "State",
      "country": "Country",
      "card": "Card number",
      "name": "Name",
      "month": "Expiration month",
      "year": "Expiration year"
    };
  }

  ngOnInit(): void {
    this.authService.auth.subscribe((data: AuthInfo | undefined)=>{
      if(data) {
        this.isLoggedIn = !!data;
      }
    });
  }

  onClickSignIn(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px',
      data: 'Login'
    });
    dialogRef.componentInstance.onClose.subscribe(()=>{
      dialogRef.close();
    });
  }
  onClickGuest(){
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '600px',
      data: 'Create an account'
    });
    dialogRef.componentInstance.onClose.subscribe(()=>{
      dialogRef.close();
    });
  }

  isCompleted(i:number): boolean{
    return this.getErrors(i, false).length === 0;
  }

  onClickSubmit(){
    const dialogRef = this.dialog.open(CheckoutDialogComponent, {
      width: '400px',
      data: 'Please wait',
      disableClose: true
    });
  }

  getErrors(stage:number, dirtyCheck:boolean):string[]{
    let fields:string[] = this.fields[stage] || [];
    let errors:string[] = [];
    fields.forEach((field:string)=>{
      const fieldLabel = this.fieldLabels[field];
      const entry:AbstractControl = this.formGroup.get(field) as AbstractControl;
      if(entry && entry.invalid && entry.errors && (!dirtyCheck || (entry.dirty || entry.touched))){
        if(entry.hasError("required")){
          errors.push(fieldLabel + " is required");
        }
        else if(entry.hasError("minlength")){
          errors.push(fieldLabel + " must have minimum length " + MIN_LENGTH);
        }
        else if(entry.hasError("maxlength")){
          errors.push(fieldLabel + " must have maximum length " + MAX_LENGTH);
        }
      }
    });
    return errors;
  }

}
