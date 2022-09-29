import { HtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  allowNewServe = false;
  serverCreationStatus= "No server was Created";
  serverName='Test Server';
  username="";
  serverCreateds=false;
  servers=['testServer', 'testServer 2']
  content=1;showContent=false;
  constructor() {
    ServerComponent
    setTimeout(() => {
      this.allowNewServe=true;
    }, 5000);
  }

  ngOnInit(): void {
  }
  onServerCreate(){
    this.serverCreationStatus="Server Was created" + this.serverName;
    this.serverCreateds=true;
    this.servers.push(this.serverName);

  }
  onUpdateServerName(event:any){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;


  }
  updatesServerStatus(){
    this.username="";

  }

  onUpdateuserName(event:any){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  oncontentbtn(){
    console.log("Event Working");

    this.content=1
  }

}
