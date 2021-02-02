import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { ShowMeetingsComponent } from './show-meetings.component';


const routes: Routes = [
  { path: "default", component: ShowMeetingsComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ShowMeetingsRoutingModule { }
