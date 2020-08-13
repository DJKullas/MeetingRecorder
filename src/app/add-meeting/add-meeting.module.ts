import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddMeetingRoutingModule } from './add-meeting-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { AddMeetingComponent } from './add-meeting.component';
import { NativeScriptFormsModule } from 'nativescript-angular';


@NgModule({
  declarations: [AddMeetingComponent],
  imports: [
    AddMeetingRoutingModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule 
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AddMeetingModule { }
