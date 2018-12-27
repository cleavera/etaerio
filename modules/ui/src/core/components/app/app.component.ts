import { Component, ViewEncapsulation } from '@angular/core';
import { Board } from '../../../board';
import { Hand } from '../../../hand';
import { Bag } from '../../../tile';

@Component({
    selector: 'core-app',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public board: Board;
    public hand: Hand;
    public bag: Bag;

    constructor() {
        this.board = new Board();
        this.bag = new Bag();
        this.hand = new Hand(this.bag);

        this.hand.deal();
    }
}
