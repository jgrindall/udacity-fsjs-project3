import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth.service";
import {AuthInfo} from "../types";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "username";
  password:string = "udac1ty";

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
    this.login();
  }

  onCancel(){
    this.onClose.emit();
  }

  login(){
    this.authService.login(this.username, this.password);
  }

}


