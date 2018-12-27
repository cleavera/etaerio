import { ISerializable } from '@cleavera/utils';
import { IMove } from '../../../move';
import { Square } from '../square/square';

export class Board implements ISerializable {
    public grid: Array<Array<Square>>;

    constructor(grid: Array<Array<Square>> = Board.defaultBoard()) {
        this.grid = grid;
    }

    public place(move: IMove): void {
        this.grid[move.position[0]][move.position[1]].placeTile(move.letter);
    }

    public serialize(): string {
        return '';
    }

    private static defaultBoard(): Array<Array<Square>> {
        return [
            [
                Square.TripleWord(),
                Square.Blank(),
                Square.Blank(),
                Square.Blank(),
                Square.Blank(),
                Square.TripleWord(),
                Square.Blank(),
                Square.Blank(),
                Square.Blank(),
                Square.Blank(),
                Square.TripleWord()
            ],
            [
                Square.Blank(),
                Square.DoubleWord(),
                Square.Blank(),
                Square.Blank(),
                Square.TripleLetter(),
                Square.Blank(),
                Square.TripleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.DoubleWord(),
                Square.Blank()
            ],
            [
                Square.Blank(),
                Square.Blank(),
                Square.DoubleWord(),
                Square.Blank(),
                Square.Blank(),
                Square.DoubleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.DoubleWord(),
                Square.Blank(),
                Square.Blank()
            ],
            [
                Square.Blank(),
                Square.Blank(),
                Square.Blank(),
                Square.TripleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.Blank(),
                Square.TripleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.Blank()
            ],
            [
                Square.Blank(),
                Square.TripleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.DoubleLetter(),
                Square.Blank(),
                Square.DoubleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.TripleLetter(),
                Square.Blank()
            ],
            [
                Square.TripleWord(),
                Square.Blank(),
                Square.DoubleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.Start(),
                Square.Blank(),
                Square.Blank(),
                Square.DoubleLetter(),
                Square.Blank(),
                Square.TripleWord()
            ],
            [
                Square.Blank(),
                Square.TripleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.DoubleLetter(),
                Square.Blank(),
                Square.DoubleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.TripleLetter(),
                Square.Blank()
            ],
            [
                Square.Blank(),
                Square.Blank(),
                Square.Blank(),
                Square.TripleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.Blank(),
                Square.TripleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.Blank()
            ],
            [
                Square.Blank(),
                Square.Blank(),
                Square.DoubleWord(),
                Square.Blank(),
                Square.Blank(),
                Square.DoubleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.DoubleWord(),
                Square.Blank(),
                Square.Blank()
            ],
            [
                Square.Blank(),
                Square.DoubleWord(),
                Square.Blank(),
                Square.Blank(),
                Square.TripleLetter(),
                Square.Blank(),
                Square.TripleLetter(),
                Square.Blank(),
                Square.Blank(),
                Square.DoubleWord(),
                Square.Blank()
            ],
            [
                Square.TripleWord(),
                Square.Blank(),
                Square.Blank(),
                Square.Blank(),
                Square.Blank(),
                Square.TripleWord(),
                Square.Blank(),
                Square.Blank(),
                Square.Blank(),
                Square.Blank(),
                Square.TripleWord()
            ],
        ];
    }
}
