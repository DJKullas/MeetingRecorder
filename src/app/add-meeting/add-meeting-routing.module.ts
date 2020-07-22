import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { AddMeetingComponent } from './add-meeting.component';


const routes: Routes = [
  { path: "default", component: AddMeetingComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AddMeetingRoutingModule { }
