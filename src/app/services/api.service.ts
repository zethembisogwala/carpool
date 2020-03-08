import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://arfa-api.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  postTrip(trip){
  	return this.http.post(this.url + 'trips', trip);
  }

  getTrips(){
  	return this.http.get(this.url + 'trips');
  }
}
