import { ISerializable } from '@cleavera/utils';
import { IPlacement } from '../../../move';
import { SBoard } from '../../interfaces/board.serialized';
import { SSquare } from '../../interfaces/square.serialized';
import { Square } from '../square/square';

export class Board implements ISerializable<SBoard> {
    public grid: Array<Array<Square>>;

    constructor(grid: Array<Array<Square>> = Board.defaultBoard()) {
        this.grid = grid;
    }

    public place(move: IPlacement): void {
        this.grid[move.position[0]][move.position[1]].placeTile(move.letter);
    }

    public serialize(): SBoard {
        return {
            g: this.grid.map((rows: Array<Square>): Array<SSquare> => {
                return rows.map((square: Square): SSquare => {
                    return square.serialize();
                });
            })
        };
    }

    public static Deserialize(value: SBoard): Board {
        return new Board(value.g.map((rows: Array<SSquare>): Array<Square> => {
            return rows.map((square: SSquare): Square => {
                return Square.Deserialize(square);
            });
        }));
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
            ]
        ];
    }
}
