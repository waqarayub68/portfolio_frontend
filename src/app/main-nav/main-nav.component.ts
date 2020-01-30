import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  contacts = [
    {
      image: '../../assets/images/facebook.png',
      site: 'Facebook',
      link: 'https://web.facebook.com/waqarayub.khan',
      linkName: 'web.facebook.com/waqarayub.khan'
    }, {
      image: '../../assets/images/linkedin.png',
      site: 'LinkedIn',
      link: 'https://www.linkedin.com/in/muhammad-waqar-5a3267123/',
      linkName: 'www.linkedin.com/in/muhammad-waqar-5a3267123/'
    }, {
      image: '../../assets/images/Fiverr.jpg',
      site: 'Fiver',
      link: 'https://www.fiverr.com/waqar_khan333?up_rollout=true',
      linkName: 'www.fiverr.com/waqar_khan333'
    }, {
      image: '../../assets/images/gmail.png',
      site: 'Gmail (Send Email)',
      link: 'https://www.gmail.com',
      linkName: 'waqarayub68@gmail.com'
    }
  ]
  // drawerVisibility = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}
  drawerVisibility = false;
  placement = 'right';
  open(): void {
    this.drawerVisibility = true;
  }

  close(): void {
    this.drawerVisibility = false;
  }
  navigation(whereTo) {
    this.router.navigate([whereTo]);
  }
}
