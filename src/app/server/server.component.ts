import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { ServersComponent } from '../servers/servers.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverID= 10;
  serverStatus='Offline';
  

  constructor() {
    this.serverStatus=Math.random()>0.5?'onLine':'offLine'

   }

  ngOnInit(): void {
  }
  getServerStatus(){
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus==='onLine'?'green':'red';
  }

}
