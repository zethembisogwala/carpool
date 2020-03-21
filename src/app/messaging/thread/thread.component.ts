import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

	toId: any = null;
	fromId: any = null;
	message: any = "";

  constructor(
  	private route: ActivatedRoute,
  	private router: Router,
  	private api: ApiService
) {}

  ngOnInit(): void {
  	this.toId = this.route.snapshot.paramMap.get("toId")
  	console.log(this.toId);

  	this.fromId = localStorage.getItem('tripId');
  	console.log(this.fromId);
  }

  send(){
  	console.log('Send button pressed')
  }

}
