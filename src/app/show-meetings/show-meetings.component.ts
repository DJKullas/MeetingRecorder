import { Component, OnInit } from '@angular/core';
import { Meeting } from '../models/meeting';
import { DataService } from '../data.service';

@Component({
  selector: 'ns-show-meetings',
  templateUrl: './show-meetings.component.html',
  styleUrls: ['./show-meetings.component.css']
})
export class ShowMeetingsComponent implements OnInit {

  meetings: Array<Meeting>;

  constructor(private dataService: DataService) { }

async getMeetings() {
  this.meetings = await this.dataService.getMeetings();
}

  ngOnInit(): void {
    this.getMeetings();
  }
}
