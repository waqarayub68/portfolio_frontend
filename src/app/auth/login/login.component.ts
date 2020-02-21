import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  array = [1, 2, 3, 4];
  // str = "'../../../assets/images/1.jpeg'";
  enableResponsiveness = false;
  constructor() { }

  ngOnInit() {
    if (window.innerWidth >= 768) {
      this.enableResponsiveness = false;
    } else { 
      this.enableResponsiveness = true;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth >= 768) {
      this.enableResponsiveness = false;
    } else {
      this.enableResponsiveness = true;
    }
    // console.log(window.innerWidth);
  }

}
