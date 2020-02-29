import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  placement = 'bottomLeft';
  view: any[];
  view1: any[] = [];
  view2: any[] = [];
  colorScheme = {
    domain: ['#000000', 	'#8B0000']
  };
  public multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        },
        {
          "name": "2012",
          "value": 890000
        },
        {
          "name": "2013",
          "value": 89400
        },
        {
          "name": "2014",
          "value": 894000
        },
        {
          "name": "2015",
          "value": 895803
        },
        {
          "name": "2016",
          "value": 936000
        },
        {
          "name": "2017",
          "value": 1012301
        }

      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        },
        {
          "name": "2012",
          "value": 80000
        },
        {
          "name": "2013",
          "value": 70000
        },
        {
          "name": "2014",
          "value": 86930
        },
        {
          "name": "2015",
          "value": 12035
        },
        {
          "name": "2016",
          "value": 936000
        },
        {
          "name": "2017",
          "value": 1012301
        }
      ]
    }
  ];
  public single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
    {
      "name": "UK",
      "value": 6200000
    },
    {
      "name": "Italy",
      "value": 4200000
    },
    {
      "name": "Spain",
      "value": 8200000
    },
    {
      "name": "Pakistan",
      "value": 8200000
    }
  ];
  constructor(private notification: NzNotificationService) {
    this.view = [innerWidth / 1.6, 300];
    this.view1 = [innerWidth / 1.6, 300];
    this.createBasicNotification();
    // this.view2 = [innerWidth / 2, 300 ];
  }

  clearBeforeNotifications(): void {
    this.notification.remove();
  }

  createBasicNotification(): void {
    this.notification.config({
      nzPlacement: this.placement
    });
    this.notification.blank(
      'Welcome Aboard',
      'You can View the Profile, Experience & Projects of Fawad Waheed'
    );
  }


  onResize(event) {
    this.view = [event.target.innerWidth / 1.6, 300];
    this.view1 = [event.target.innerWidth / 1.6, 300];
    // this.view2 = [innerWidth / 2, 300 ];
  }
  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit() {
  }

}
