import { Component, OnInit } from '@angular/core';

export interface Hiker {
  name: string;
  route: string;
  driving: string;
}

@Component({
  selector: 'app-hiking',
  templateUrl: './hiking.component.html',
  styleUrls: ['./hiking.component.css']
})
export class HikingComponent implements OnInit {

	today = new Date();
  	date = this.today.getFullYear()+'/'+(this.today.getMonth()+1)+'/'+this.today.getDate();

    hikers: Hiker[] = [
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
