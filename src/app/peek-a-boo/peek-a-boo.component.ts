import {Component} from '@angular/core';
import {LoggerService} from "../logger.service";

@Component({
    selector: 'app-peek-a-boo',
    template: `
        <div class="parent">
            <h2>Peek-A-Boo</h2>

            <button (click)="toggleChild()">
                {{ hasChild ? 'destroy' : 'create'}} PeekABooComponent
            </button>
            <button (click)="updateHero()" [hidden]="!hasChild">Update Hero</button>

            <app-peek-a-boo-child *ngIf="hasChild" [name]="heroName"></app-peek-a-boo-child>

            <h4>-- Lifecycle Hook Log --</h4>
            <div *ngFor="let msg of hookLog">{{msg}}</div>
        </div>
    `,
    styles: ['.parent { background: moccasin}'],
    providers: [LoggerService]
})
export class PeekABooComponent {

    hasChild = false;
    hookLog: string[];

    heroName = 'windostorm';

    constructor(private logger: LoggerService) {
        this.hookLog = logger.logs;
    }

    toggleChild() {
        this.hasChild = !this.hasChild;
        if (this.hasChild) {
            this.heroName = 'windostorm';
            this.logger.clear();
        }
        this.hookLog = this.logger.logs;
        this.logger.tick();
    }

    updateHero() {
        this.heroName += '!';
        this.logger.tick();
    }
}
