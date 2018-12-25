import {Component, ViewChild, AfterViewChecked, AfterViewInit} from '@angular/core';
import {LoggerService} from "../logger.service";


@Component({
    selector: 'app-child-view',
    template: '<input [(ngModel)]="hero">'
})
export class ChildViewComponent {
    hero = 'Magneta';
}


@Component({
    selector: 'after-view',
    template: `
        <div>-- child view begins --</div>
        <app-child-view></app-child-view>
        <div>-- child view ends --</div>
        <p *ngIf="comment" class="comment">{{ comment }}</p>
    `
})
export class AfterViewComponent implements AfterViewInit, AfterViewChecked {
    private prevHero = '';
    comment: string;

    @ViewChild(ChildViewComponent) vc: ChildViewComponent;

    constructor(private lgr: LoggerService) {
        this.logIt('AfterView constructor');
    }

    ngAfterViewInit() {
        this.logIt('AfterViewInit');
        this.doSomething();
    }

    ngAfterViewChecked() {
        if (this.prevHero === this.vc.hero) {
            this.logIt('AfterViewChecked (no chnage)');
        } else {
            this.prevHero = this.vc.hero;
            this.logIt('AfterViewChecked');
            this.doSomething();
        }
    }

    private doSomething() {
        const c = this.vc.hero.length > 10 ? `that's a long name` : '';
        if (c !== this.comment) {
            this.lgr.tick_then(() => this.comment = c);
        }
    }

    private logIt(method: string) {
        const child = this.vc;
        const message = `${method}: ${child ? child.hero : 'no'} child view`;
        this.lgr.log(message);
    }
}

@Component({
    selector: 'app-after-view-parent',
    template: `
        <div class="parent">
            <h2>AfterView</h2>
            <after-view *ngIf="show"></after-view>

            <h4>--AfterView Logs--</h4>
            <p>
                <button (click)="reset()">Reset</button>
            </p>
            <div *ngFor="let msg of lgr.logs">{{ msg }}</div>
        </div>`,
    providers: [LoggerService]
})
export class AfterViewParentComponent {
    show = true;

    constructor(public lgr: LoggerService) {
    }

    reset() {
        this.lgr.clear();
        this.show = false;
        this.lgr.tick_then(() => this.show = true);
    }


}
