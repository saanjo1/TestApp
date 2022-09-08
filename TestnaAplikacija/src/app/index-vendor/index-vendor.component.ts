import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {VendorIndexVM} from "../VendorIndexVM";
import {MyConfig} from "../MyConfig";

@Component({
  selector: 'app-index-vendor',
  templateUrl: './index-vendor.component.html',
  styleUrls: ['./index-vendor.component.css']
})
export class IndexVendorComponent implements OnInit {
  trazi: string="";
  prikaz: any;
  editVendor: VendorIndexVM;
  constructor(private http: HttpClient) {

  }
  fetchData(){
    this.http.get<VendorIndexVM>(MyConfig.webappurl + 'Get').subscribe((result)=>{
      this.prikaz = result;
    })
  }

  ngOnInit(): void {
    this.fetchData();
  }

  obrisi(s: VendorIndexVM) {
    var endpoint = "Delete?VendorId=";
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    this.http.delete<string>(MyConfig.webappurl + endpoint + s.vendorId, { headers, responseType: 'text'}).subscribe((result)=>{
      this.fetchData();
    })
  }

  getVendors() {
    return this.prikaz.filter(s=>s.vendorName.startsWith(this.trazi));
  }
}
