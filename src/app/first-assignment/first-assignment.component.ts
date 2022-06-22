import { Component, OnInit } from '@angular/core';
import { FirstAssignmentmodaloneComponent } from '../first-assignmentmodalone/first-assignmentmodalone.component';
import { FirstAssignmentmodaltwoComponent } from '../first-assignmentmodaltwo/first-assignmentmodaltwo.component';

@Component({
  selector: 'app-first-assignment',
  templateUrl: './first-assignment.component.html',
  styleUrls: ['./first-assignment.component.css']
})
export class FirstAssignmentComponent implements OnInit {

  constructor() {
    FirstAssignmentmodaloneComponent
    FirstAssignmentmodaltwoComponent
   }

  ngOnInit(): void {
  }

}
