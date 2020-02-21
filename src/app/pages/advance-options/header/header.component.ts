import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // navLinks = [{
  //   label: 'Abc',
  //   path: '/advance-options/job'
  // }, {
  //   label: 'Abc',
  //   path: 'koko'
  // }]
  tabs: Array<{ name: string; id: number }> = [];
  nzTabPosition = 'top';
  selectedIndex = 0;
  constructor() { }
  paddingEnabling = true;
  log(args: any[]): void {
    // console.log(args);
  }

  ngOnInit(): void {
    if (window.innerWidth >= 768) {
      this.paddingEnabling = true;
      this.nzTabPosition = 'left';
    } else { 
      this.paddingEnabling = false;
      this.nzTabPosition = 'top';
    }
    this.tabs.push({
      name: `Scheduler`,
      id: 1
    }, {
      name: `Map`,
      id: 2
    }, {
      name: `Forms`,
      id: 3
    });
    // for (let i = 4; i < 20 ; i++) {
    //   this.tabs.push(
    //     {
    //       name: `Forms`,
    //       id: i
    //     }
    //   );
    // }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    if (window.innerWidth >= 768) {
      this.paddingEnabling = true;
      this.nzTabPosition = 'left';
    } else {
      this.paddingEnabling = false;
      this.nzTabPosition = 'top';
    }
    // console.log(window.innerWidth);
  }

}
