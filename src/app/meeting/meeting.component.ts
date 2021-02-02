import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Meeting } from '../models/meeting';
import { DataService } from '../data.service';

@Component({
  selector: 'ns-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  private meeting: Meeting;

  constructor(private route: ActivatedRoute, private location: Location, private dataService: DataService) { }

  async getMeeting() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.meeting = await this.dataService.getMeeting(id);
  }

  ngOnInit(): void {
    console.log("IN MEETTTINNGNGG")
    this.getMeeting();
  }

}
