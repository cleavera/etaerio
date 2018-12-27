import { Component, ViewEncapsulation } from '@angular/core';
import { Board } from '../../../board';
import { Hand } from '../../../hand';

@Component({
    selector: 'core-app',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public board: Board;
    public hand: Hand;

    constructor() {
        this.board = new Board();
        this.hand = new Hand();

        this.hand.deal();
    }
}
