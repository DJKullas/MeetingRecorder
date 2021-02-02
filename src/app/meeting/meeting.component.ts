import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Meeting } from '../models/meeting';
import { DataService } from '../data.service';

@Component({
  selector: 'ns-meeting',
  templateUrl: './meeting.component.html'
})
export class MeetingComponent implements OnInit {

  private meeting: Meeting;
  private studentName: string;
  private studentGrade: number;
  private teacherName: string;
  private teacherTitle: string;
  private date: string;
  private details: string;

  constructor(private route: ActivatedRoute, private location: Location, private dataService: DataService) { }

  async getMeeting() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.meeting = await this.dataService.getMeeting(id);
    this.studentName = this.meeting.student.fullName;
    this.studentGrade = this.meeting.student.grade;
    this.teacherName = this.meeting.teacher.fullName;
    this.teacherTitle = this.meeting.teacher.title;
    this.date = this.meeting.dateString;
    this.details = this.meeting.details;
  }

  ngOnInit(): void {
    console.log("IN MEETTTINNGNGG")
    this.getMeeting();
  }

}
