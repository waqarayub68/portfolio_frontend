import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.css']
})
export class JobsListingComponent implements OnInit {

  jobs = [
    {
      company: 'Vizteck Solutions',
      position: 'Software Developer',
      from: '04/07/2019',
      to: 'Present',
      dept: 'Software House',
      overview: 'My Responsibilities are to build the attractive & core business logics applications for the onDemand Clients in Angular 7, Node Js, NoSql Database',
      // responsibilites: 'Responsibi'
      image: '../../../../assets/images/viz.png'
    }, {
      company: 'Pakistan Telecommunication Corporation Limited',
      position: 'Internee',
      from: '23/07/2017',
      to: '06/09/2017',
      dept: 'Data Center',
      overview: 'My Responsibilities are to work with Windows Server Team to learn about MCSC concepts e.g DHCP, DNS, Active Directories, Group Policies etc using Windows Server 2012',
      // responsibilites: 'Responsibi'
      image: '../../../../assets/images/brand.gif'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
