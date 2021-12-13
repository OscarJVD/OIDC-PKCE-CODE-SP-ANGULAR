import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  tokenDetails: any;
  token: any;
  constructor(public modal: NgbModal) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');

    if (this.token) {
      const base64Url = this.token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      this.tokenDetails = JSON.parse(atob(base64));

      console.log(this.tokenDetails);
    }
  }
  logoutSesion(): void {
    window.location.assign(environment.logout);
    localStorage.removeItem('Token');
    localStorage.removeItem('code');
  }
}
