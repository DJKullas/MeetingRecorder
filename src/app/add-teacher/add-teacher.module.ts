import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AddTeacherRoutingModule } from './add-teacher-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { AddTeacherComponent } from './add-teacher.component';


@NgModule({
  declarations: [AddTeacherComponent],
  imports: [
    AddTeacherRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AddTeacherModule { }
