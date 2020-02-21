import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor() { }
  screenWidth = false;
  paddingEnabling = false;
  ngOnInit() {
    // console.log(window.innerWidth);
    if (window.innerWidth >= 768) {
      this.paddingEnabling = true;
    } else {
      this.paddingEnabling = false;
    }
    // console.log(this.paddingEnabling);
    
  }
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth >= 768) {
      this.paddingEnabling = true;
    } else {
      this.paddingEnabling = false;
    }
    console.log(window.innerWidth);
  }

}
