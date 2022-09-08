import {Component, Input, OnInit} from '@angular/core';
import {VendorIndexVM} from "../VendorIndexVM";
import {HttpClient} from "@angular/common/http";
import {MyConfig} from "../MyConfig";

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css']
})
export class EditVendorComponent implements OnInit {
  @Input()
  manageVendor: VendorIndexVM;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  snimi(editVendor: VendorIndexVM) {
    this.http.put(MyConfig.webappurl + "Put", this.manageVendor).subscribe((result)=>{
      this.manageVendor = null;
    })
  }
}
