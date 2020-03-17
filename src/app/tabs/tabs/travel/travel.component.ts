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
  tripId: string = "";

  constructor(
    private api: ApiService, 
    private _snackBar: MatSnackBar,
    private _router: Router) {

  }

  ngOnInit(): void {
    this.tripId = localStorage.getItem('tripId');
    console.log(this.tripId)

    if(this.tripId){
      this.api.getTrip(this.tripId).subscribe(result => {
        console.log(result);

        this.fName = result[0]['FirstName'];
        this.lName = result[0]['LastName'];
        this.phone = result[0]['Phone'];
        this.from = result[0]['From'];
        this.to = result[0]['To'];
        this.date = result[0]['Date'];
        this.time = result[0]['Time'];
        this.driving = result[0]['Driving'];
      })
    }
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

  	

  	if(this.tripId){
      this.api.putTrip(this.tripId, trip).subscribe(result => {
        console.log(result);
        this.snack('updated');
        this._router.navigate(['/tabs'])
      })
    }
    else{
      this.api.postTrip(trip).subscribe(result => {
        console.log(result);
        localStorage.setItem('tripId', result['_id'])
        this.snack('posted');
        this._router.navigate(['/tabs']);
    })
    }

  	
    this.loading = false;
 
  }

  snack(operation){
    let successMessage = `Trip ${operation} successfully!`
    let action = "Close"

    this._snackBar.open(successMessage, action, {
          duration: 2000,
      });
  }

}
