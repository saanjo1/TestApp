import {Component, Input} from '@angular/core';
import {VendorIndexVM} from "./VendorIndexVM";
import {MyConfig} from "./MyConfig";
import {HttpClient} from "@angular/common/http";
import {OnInit} from "@angular/core";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestnaAplikacija';
  constructor(private http: HttpClient) {

  }




}
