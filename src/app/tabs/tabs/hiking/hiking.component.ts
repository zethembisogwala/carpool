import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

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

    hikers: any = []
    myHikers: any = [
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

  constructor(private api: ApiService, public _router: Router) {
    this.hikers = [];
    this.updateHikers();

  }

  ngOnInit(): void {
  }

  updateHikers(){
    this.api.getTrips().subscribe(results => {
      this.hikers = results;
      console.log(this.hikers);
      console.log(this.myHikers);
      this.filterHikers(this.hikers);
    },
      err => {
        console.log('Could not load trips, check your network connection.')
      })

    
  }

  filterHikers(hikers){
    let hiking = [];
    for(let p = 0; p < hikers.length; p++){
      if(hikers[p]['Driving'].toLowerCase() === "false"){
        hiking.push(hikers[p]);
      }
    }
    this.myHikers = hiking;
  }

  click(id){
    console.log(id);
    this._router.navigate(['thread', id])
  }

}
