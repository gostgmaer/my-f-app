import { Component, OnInit } from '@angular/core';
import { ServersComponent } from '../servers/servers.component';

@Component({
  selector: 'app-server',
  template: '<app-servers></app-servers>',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() {
    ServersComponent
   }

  ngOnInit(): void {
  }

}
