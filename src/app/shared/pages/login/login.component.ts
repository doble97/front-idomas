import { Component } from '@angular/core';

@Component({
  selector: 'shared-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string='';
  password: string='';

  handleSubmit():void{
    console.log()
  }
  handleEmail(value: string){
    this.email = value;
    console.log('desde el padre', this.email)
  }

  handlePassword(value: string){
    this.password = value;
  }

}
