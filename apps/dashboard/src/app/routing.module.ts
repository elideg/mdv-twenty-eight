import { TacosItemComponent } from './tacos/tacos-item/tacos-item.component';
import { TacosComponent } from './tacos/tacos.component';
import { LoginComponent } from '@mdv-twenty-eight/ui-lib';
import { WildComponent } from '@mdv-twenty-eight/ui-lib';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tacos', children: [
    { path: '', component: TacosComponent },
    { path: ':id', component: TacosItemComponent }
  ] },
  { path: '404', component: WildComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
