import { Board } from '../../../board';
import { Hand } from '../../../hand';
import { IMove, Move } from '../../../move';
import { Bag } from '../../../tile';

export class Game {
    public board: Board;
    public hand: Hand;
    public bag: Bag;
    public moves: Array<Move>;

    public get currentMove(): Move {
        return this.moves[this.moves.length - 1];
    }

    constructor() {
        this.board = new Board();
        this.bag = new Bag();
        this.moves = [new Move()];
        this.hand = new Hand(this.bag);

        this.hand.deal();
    }

    public cancelMove(): void {
        this.currentMove.buffer.forEach((move: IMove) => {
            this.hand.add(move.letter);
        });

        this.currentMove.clear();
    }

    public confirmMove(): void {
        this.currentMove.buffer.forEach((move: IMove) => {
            this.board.place(move);
        });

        this.moves.push(new Move());

        this.hand.deal();
    }
}
