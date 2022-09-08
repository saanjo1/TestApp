import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { IndexVendorComponent } from './index-vendor/index-vendor.component';
import { SettingsComponent } from './settings/settings.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    EditVendorComponent,
    IndexVendorComponent,
    SettingsComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
      CommonModule,
      RouterModule.forRoot([
        {path: 'open-settings', component: SettingsComponent},
        {path: 'open-vendors', component: IndexVendorComponent},
        {path: 'edit-vendors', component: EditVendorComponent}
      ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
