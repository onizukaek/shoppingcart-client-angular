import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService} from '../../shared/providers/authentication.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-login',
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User('','', '', '', '');
  public errorMsg = '';

  constructor(
      private _service: AuthenticationService,
      private _router: Router
  ) {}

  login() {
    console.log(this.user);
    this._service
      .login(this.user.userName, this.user.password)
      .subscribe(
        resp => {
          console.log(resp);
          this._router.navigateByUrl('/home');
        },
        err => {
          console.log(err);
          let errBodyObj = JSON.parse(err._body);
          this.errorMsg = errBodyObj.message;
        }
      );
  }

  ngOnInit() {
  }

}
