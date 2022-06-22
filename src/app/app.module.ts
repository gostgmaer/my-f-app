import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FirstAssignmentComponent } from './first-assignment/first-assignment.component';
import { FirstAssignmentmodaloneComponent } from './first-assignmentmodalone/first-assignmentmodalone.component';
import { FirstAssignmentmodaltwoComponent } from './first-assignmentmodaltwo/first-assignmentmodaltwo.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    FirstAssignmentComponent,
    FirstAssignmentmodaloneComponent,
    FirstAssignmentmodaltwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
