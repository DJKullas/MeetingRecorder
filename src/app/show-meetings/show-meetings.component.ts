import { Component, OnInit, OnChanges } from '@angular/core';
import { Meeting } from '../models/meeting';
import { DataService } from '../data.service';

@Component({
  selector: 'ns-show-meetings',
  templateUrl: './show-meetings.component.html',
  styleUrls: ['./show-meetings.component.css']
})
export class ShowMeetingsComponent implements OnInit {

  meetings: Array<Meeting>;

  constructor(private dataService: DataService) {
    //this.meetings = dataService.meetings;
  }

async getMeetings() {
  await this.dataService.getMeetings();
  this.meetings.sort(function(a,b): any{
    return (new Date(b.date).getTime() - new Date(a.date).getTime());
  });
}

  ngOnInit(): void {
    this.dataService.sharedMeetings.subscribe(meetings => this.meetings = meetings);
    this.getMeetings();
  }
}
