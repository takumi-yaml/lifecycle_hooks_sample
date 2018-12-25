import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    DoCheck,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    Component,
    OnInit,
    Input, AfterViewInit
} from '@angular/core';
import {LoggerService} from "../../logger.service";

let nextId = 1;

export class PeekABooChild implements OnInit {
    constructor(public logger: LoggerService) {
    }

    ngOnInit() {
        this.logIt(`OnInit`);
    }

    logIt(msg: string) {
        this.logger.log(`#${nextId++} ${msg}`);
    }
}

@Component({
    selector: 'app-peek-a-boo-child',
    template: '<p>Now you see my hero, {{name}}</p>',
    styleUrls: ['./peek-a-boo-child.component.scss']
})
export class PeekABooChildComponent extends PeekABooChild implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, AfterViewInit, AfterContentChecked, OnDestroy {

    @Input() name: string;

    private verb = 'initialized';

    constructor(public logger: LoggerService) {
        super(logger);

        const is = this.name ? 'is' : 'is not';
        this.logIt(`name ${is} known at construction`);
    }

    ngOnChanges(changes: SimpleChanges) {
        const changesMsgs: string[] = [];
        for (let propName in changes) {
            if (propName === 'name') {
                const name = changes['name'].currentValue;
                changesMsgs.push(`name ${this.verb} to "${name}"`);
            } else {
                changesMsgs.push(propName + ' ' + this.verb);
            }
        }
    }

    ngDoCheck() {
        this.logIt(`DoCheck`);
    }

    ngAfterContentInit() {
        this.logIt(`AfterContentInit`);
    }

    ngAfterContentChecked() {
        this.logIt(`AfterContentChecked`);
    }

    ngAfterViewInit() {
        this.logIt(`AfterViewInit`);
    }

    ngAfterViewChecked() {
        this.logIt(`AfterViewChecked`);
    }

    ngOnDestroy() {
        this.logIt(`OnDestroy`);
    }
}
