import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor() { }
  // listOfData = [];
  professionalProjects = [
    {
      active: false,
      arrow: true,
      disabled: false,
      name: 'Admin Panels (3-Different Applications)',
      tech: ['Angular 7', 'Reactive Forms', 'Google Maps', 'Here Maps', 'Charts', 'Integration with backend'],
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '15px',
        border: '0px'
      }
    },
    {
      active: false,
      arrow: true,
      disabled: true,
      name: 'Service Provider Application (Implementing the core business logics of an Application)',
      tech: ['Angular 7', 'Reactive Forms', 'Here Maps', 'Charts', 'Job Scheduler (Job Slotings)',
        'Calender View', 'Angular Material', 'Third Party Package for Chating', 'Post.io (Postal Code Validation for UK)'
        , 'Integration with backend'],
      // icon: 'double-right',
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '15px',
        border: '0px'
      }
    },
    {
      active: false,
      arrow: true,
      disabled: false,
      name: 'Angular Fuse Theme',
      tech: ['Angular 8', 'Stepper Form', 'Charts', 'Validations', 'Integration with backend'],
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '15px',
        border: '0px'
      }
    }
  ];
  acadmicProjects = [
    {
      active: false,
      arrow: true,
      disabled: false,
      name: 'ANSWERIT.com (Final Year Project)',
      tech: ['Angular 7', 'Node JS', 'Reactive Forms', 'Charts', 'Integration with backend'],
      concepts: ['Restful API', 'MongoDB', 'Express JS'],
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '15px',
        border: '0px'
      }
    },
    {
      active: false,
      arrow: true,
      disabled: true,
      name: 'Face Recognition Attendance System',
      tech: ['Python', 'OpenCV'],
      // icon: 'double-right',
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '15px',
        border: '0px'
      }
    },
    {
      active: false,
      arrow: true,
      disabled: false,
      name: 'Musafir (Android Application)',
      tech: ['Android Studio', 'Java', 'Firebase', 'Here Developers Places API', 'SQL Database'],
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '15px',
        border: '0px'
      }
    },
    {
      active: false,
      arrow: true,
      disabled: false,
      name: 'CMS (WEB Base Bloging Site)',
      tech: ['Node JS', 'MongoDB', 'EJS', 'Express JS'],
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '15px',
        border: '0px'
      }
    },
    {
      active: false,
      arrow: true,
      disabled: false,
      name: 'Hospital Management System',
      tech: ['Java', 'Java Swing', 'Java FX', 'SQL'],
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '15px',
        border: '0px'
      }
    },
    {
      active: false,
      arrow: true,
      disabled: false,
      name: 'Employee Management System',
      tech: ['Oracle', 'Oracle Form Builder'],
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '15px',
        border: '0px'
      }
    },
    {
      active: false,
      arrow: true,
      disabled: false,
      name: 'Student Management System',
      tech: ['C++', 'SQL Database', 'Filestreams'],
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '15px',
        border: '0px'
      }
    }
  ];
  ngOnInit() {
    // for(let i = 0; i < 10; i++) {
    //   this.listOfData.push(
    //     {
    //       key: '1',
    //       name: 'John Brown',
    //       age: 32,
    //       address: 'New York No. 1 Lake Park'
    //     }
    //   );
    // }
    // for(let i = 0; i < 10; i++) {
    //   this.listOfData.push(
    //     {
    //       key: '2',
    //       name: 'Waqar Ayub',
    //       age: 32,
    //       address: 'Bahria Town'
    //     }
    //   );
    // }
  }

  // currentPageDataChange($event): void {
  //   // this.listOfDisplayData = $event;
  //   console.log($event);
  //   this.refreshStatus();
  // }
  // refreshStatus(): void {

  // }

}
