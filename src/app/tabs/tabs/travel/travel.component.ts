import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

	startDate = new Date(2020, 0, 1);
	fName: string = "";
	lName: string = "";
	phone: string = "";
	from: string = "";
	to: string = "";
	date: string = "";

  constructor() {

  }

  ngOnInit(): void {
  }

  save(){
  	console.log("saved");
  }

}
