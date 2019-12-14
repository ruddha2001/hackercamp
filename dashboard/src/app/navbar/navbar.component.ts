import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logout() {
    window.location.href="http://192.168.43.183";
  }

  constructor() { }

  ngOnInit() {
  }

}
