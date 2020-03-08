import { Component, OnInit } from '@angular/core';

export interface Driver {
  name: string;
  route: string;
  driving: string;
}

@Component({
  selector: 'app-driving',
  templateUrl: './driving.component.html',
  styleUrls: ['./driving.component.css']
})
export class DrivingComponent implements OnInit {

  today = new Date();
  date = this.today.getFullYear()+'/'+(this.today.getMonth()+1)+'/'+this.today.getDate();

  drivers: Driver[] = [
  	{
  	name: 'Zethembiso Gwala',
  	route: 'NKU to ND',
  	driving: 'true'
  	},
  	{
  	name: 'Peter Parker',
  	route: 'CA to DC',
  	driving: 'true'
  	},
  	{
  	name: 'Bucky Barnes',
  	route: 'NN to ND',
  	driving: 'true'
  	},
  	{
  	name: 'Duke Diver',
  	route: 'NND to NBA',
  	driving: 'true'
  	},
  	{
  	name: 'Tina Turner',
  	route: 'NP to ND',
  	driving: 'true'
  	}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
