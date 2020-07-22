import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ShowMeetingsRoutingModule } from './show-meetings-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ShowMeetingsComponent } from './show-meetings.component';


@NgModule({
  declarations: [ShowMeetingsComponent],
  imports: [
    ShowMeetingsRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ShowMeetingsModule { }
