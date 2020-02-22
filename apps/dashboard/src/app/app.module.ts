import { UiLibModule } from '@mdv-twenty-eight/ui-lib';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { TacosDetailsComponent } from './tacos/tacos-details/tacos-details.component';
import { TacosListComponent } from './tacos/tacos-list/tacos-list.component';
import { TacosItemComponent } from './tacos/tacos-item/tacos-item.component';
import { TacosComponent } from './tacos/tacos.component';
import { RoutingModule } from './routing.module';
import { CoreDataModule } from '@mdv-twenty-eight/core-data';
import { MaterialModule } from '@mdv-twenty-eight/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TacosComponent, TacosItemComponent, TacosListComponent, TacosDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    UiLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
