import { ISerializable } from '@cleavera/utils';
import { Square } from '../square/square';

export class Board implements ISerializable {
    private _board: Array<Array<Square>>;

    constructor(board: Array<Array<Square>> = Board.defaultBoard()) {
        this._board = board;
    }

    public serialize(): string {
        return '';
    }

    private static defaultBoard(): Array<Array<Square>> {
        return [
            [Square.TripleWord(), Square.Blank(), Square.Blank(), Square.TripleLetter(), Square.Blank(), Square.Blank(), Square.TripleWord()],
            [Square.Blank(), Square.DoubleWord(), Square.Blank(), Square.Blank(), Square.Blank(), Square.DoubleWord(), Square.Blank()],
            [Square.Blank(), Square.Blank(), Square.DoubleLetter(), Square.Blank(), Square.DoubleLetter(), Square.Blank(), Square.Blank()],
            [Square.TripleLetter(), Square.Blank(), Square.Blank(), Square.Start(), Square.Blank(), Square.Blank(), Square.TripleLetter()],
            [Square.Blank(), Square.Blank(), Square.DoubleLetter(), Square.Blank(), Square.DoubleLetter(), Square.Blank(), Square.Blank()],
            [Square.Blank(), Square.DoubleWord(), Square.Blank(), Square.Blank(), Square.Blank(), Square.DoubleWord(), Square.Blank()],
            [Square.TripleWord(), Square.Blank(), Square.Blank(), Square.TripleLetter(), Square.Blank(), Square.Blank(), Square.TripleWord()]
        ];
    }
}
