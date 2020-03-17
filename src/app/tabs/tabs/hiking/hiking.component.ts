import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

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
    myHikers: any = []

  constructor(private api: ApiService) {
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

}
