import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1.5s 100ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('fromBottom', [
      state('flyBttom', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('1.5s 100ms ease-in')
      ])
    ])
  ]
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
