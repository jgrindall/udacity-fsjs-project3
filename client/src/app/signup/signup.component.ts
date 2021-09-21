import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth.service";
import {AuthInfo} from "../types";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username:string = "";
  password:string = "";

  @Output()
  onClose: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.auth.subscribe((data: AuthInfo | undefined)=>{
      if(data) {
        this.onClose.emit();
      }
    });
  }

  onClickSubmit(){
    this.authService.signup(this.username, this.password);
  }

  onCancel(){
    this.onClose.emit();
  }

}
