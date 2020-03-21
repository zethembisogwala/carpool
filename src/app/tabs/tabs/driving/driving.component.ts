import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service'

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

  drivers: any = []
  myDrivers: any = [
    {
      "_id": "235245265tgfsdgw3",
      "FirstName": "John",
      "LastName": "Cena",
      "Phone": "765434567",
      "From": "Ring",
      "To": "Movie",
      "Date": "2020/12/12",
      "Time": "12:00",
      "Driving": "true"
    },
    {
      "_id": "g76ri7fkdfcf67",
      "FirstName": "Wade",
      "LastName": "Barret",
      "Phone": "876543456",
      "From": "Ring",
      "To": "Movie",
      "Date": "2020/12/12",
      "Time": "12:00",
      "Driving": "true"
    }
  ]

  constructor(private api: ApiService) { 
  	this.drivers = [];
  	this.updateDrivers();
  }

  ngOnInit(): void {

  }

  updateDrivers(){
  	this.api.getTrips().subscribe(results => {
  		this.drivers = results;
  		console.log(this.drivers);
  		console.log(this.myDrivers);
  		this.filterDrivers(this.drivers);
  	},
      err => {
        console.log('Could not load trips, check your network connection.')
      })

  	
  }

  filterDrivers(drivers){
  	let driving = [];
  	for(let p = 0; p < this.drivers.length; p++){
  		if(this.drivers[p]['Driving'].toLowerCase() === "true"){
  			driving.push(drivers[p]);
  		}
  	}
  	this.myDrivers = driving;
  }

}
