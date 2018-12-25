import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeekABooComponent} from "./peek-a-boo/peek-a-boo.component";
import {SpyDirective} from "./spy.directive";

const routes: Routes = [
    {path: 'p', component: PeekABooComponent},
    {path: 'spy', component: SpyDirective},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
