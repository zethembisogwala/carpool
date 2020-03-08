import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'

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

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
  }

  save(){

  	let trip = {
  		"FirstName": this.fName,
  		"LastName": this.lName,
  		"Phone": this.phone,
  		"From": this.from,
  		"To": this.to,
  		"Date": this.date
  	};

  	this.api.postTrip(trip).subscribe(result => {
  		console.log(result);
  	})
  	
  }

}
