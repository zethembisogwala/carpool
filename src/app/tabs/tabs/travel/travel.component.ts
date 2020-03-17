import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

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
	time: string = "";
	driving: string = "";

	loading = false;

  constructor(
    private api: ApiService, 
    private _snackBar: MatSnackBar,
    private _router: Router) {

  }

  ngOnInit(): void {
  }

  save(){
  	this.loading = true;

  	let trip = {
  		"FirstName": this.fName,
  		"LastName": this.lName,
  		"Phone": this.phone,
  		"From": this.from,
  		"To": this.to,
  		"Date": this.date,
  		"Time": this.time,
  		"Driving": this.driving
  	};

  	let successMessage = "Trip posted successfully!"
  	let action = "Close"

  	this.api.postTrip(trip).subscribe(result => {
  		console.log(result);
      this._router.navigate(['/tabs']);
  	})

  	this._snackBar.open(successMessage, action, {
      		duration: 2000,
    	});
    	this.loading = false;
 
  }

}
