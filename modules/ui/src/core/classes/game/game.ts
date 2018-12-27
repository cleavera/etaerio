import { Board } from '../../../board';
import { Hand } from '../../../hand';
import { Bag } from '../../../tile';
import { Move } from '../../classes/move/move';

export class Game {
    public board: Board;
    public hand: Hand;
    public bag: Bag;
    public move: Move;

    constructor() {
        this.board = new Board();
        this.bag = new Bag();
        this.move = new Move();
        this.hand = new Hand(this.bag);

        this.hand.deal();
    }
}
