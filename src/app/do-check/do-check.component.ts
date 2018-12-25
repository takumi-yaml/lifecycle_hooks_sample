import {Component, Input, DoCheck, ViewChild} from '@angular/core';

class Hero {
    constructor(public name: string) {
    }
}

@Component({
    selector: 'app-do-check',
    template: `
        <div class="hero">
            <p>{{hero.name}} can {{power}}</p>


            <h4>-- change log ---</h4>
            <div *ngFor="let chg of changeLog">{{ chg }}</div>
        </div>`,
    styleUrls: ['./do-check.component.scss']
})
export class DoCheckComponent implements DoCheck {

    @Input() hero: Hero;
    @Input() power: string;

    changeDetected = false;
    changeLog: string[] = [];

    oldHeroName = '';
    oldPower = '';
    oldLogLength = 0;
    noChangeCount = 0;

    ngDoCheck() {
        if (this.hero.name !== this.oldHeroName) {
            this.changeDetected = true;
            this.changeLog.push(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
            this.oldHeroName = this.hero.name;
        }

        if (this.power !== this.oldPower) {
            this.changeDetected = true;
            this.changeLog.push(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
            this.oldPower = this.power;
        }

        if (this.changeDetected) {
            this.noChangeCount = 0;
        } else {
            const count = this.noChangeCount += 1;
            const noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
            if (count === 1) {
                this.changeLog.push(noChangeMsg);
            } else {
                this.changeLog[this.changeLog.length - 1] = noChangeMsg;
            }
        }

        this.changeDetected = false;
    }

    reset() {
        this.changeDetected = true;
        this.changeLog = [];
    }
}

@Component({
    selector: 'do-check-parent',
    templateUrl: './do-check-parent.component.html',
    styles: []
})
export class DoCheckParentComponent {
    hero: Hero;
    power: string;
    title = 'DoCheck';

    @ViewChild(DoCheckComponent) childView: DoCheckComponent;

    constructor() {
        this.reset();
    }

    reset() {
        this.hero = new Hero('Windstorm');
        this.power = 'sing';
        if (this.childView) {
            this.childView.reset();
        }
    }
}
