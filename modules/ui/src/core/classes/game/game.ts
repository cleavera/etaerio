import { ISerializable } from '@cleavera/utils';
import { Board } from '../../../board';
import { Hand } from '../../../hand';
import { IMove, Move } from '../../../move';
import { Bag } from '../../../tile';
import { SGame } from '../../interfaces/game.serialized';

export class Game implements ISerializable<SGame> {
    public board: Board;
    public hand: Hand;
    public bag: Bag;
    public moves: Array<Move>;

    public get currentMove(): Move {
        return this.moves[this.moves.length - 1];
    }

    constructor(board: Board = new Board(), bag: Bag = new Bag(), hand: Hand = new Hand(bag), moves: Array<Move> = [new Move()]) {
        this.board = board;
        this.bag = bag;
        this.moves = moves;
        this.hand = hand;

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

    public serialize(): SGame {
        return {
            g: this.board.serialize(),
            h: this.hand.serialize(),
            b: this.bag.serialize()
        };
    }

    public static Deserialize(serial: SGame): Game {
        const grid: Board = Board.Deserialize(serial.g);
        const bag: Bag = Bag.Deserialize(serial.b);
        const hand: Hand = Hand.Deserialize(serial.h, bag);

        return new Game(grid, bag, hand);
    }
}
