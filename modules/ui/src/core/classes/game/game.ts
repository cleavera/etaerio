import { Board } from '../../../board';
import { Hand } from '../../../hand';
import { Bag } from '../../../tile';

export class Game {
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
