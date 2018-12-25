import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PeekABooComponent} from './peek-a-boo/peek-a-boo.component';
import {PeekABooChildComponent} from './peek-a-boo/peek-a-boo-child/peek-a-boo-child.component';
import {SpyDirective} from './spy.directive';
import {SpyComponent} from './spy/spy.component';
import {FormsModule} from "@angular/forms";
import { DoCheckComponent, DoCheckParentComponent } from './do-check/do-check.component';
import { AfterViewComponent, ChildViewComponent, AfterViewParentComponent } from './after-view/after-view.component';

@NgModule({
    declarations: [
        AppComponent,
        PeekABooComponent,
        PeekABooChildComponent,
        SpyDirective,
        SpyComponent,
        DoCheckComponent,
        DoCheckParentComponent,
        AfterViewComponent, ChildViewComponent, AfterViewParentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
