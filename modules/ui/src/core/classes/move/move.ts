import { $isNull, IPosition, Maybe } from '@cleavera/utils';
import { ILetter } from '../../../tile';
import { IMove } from '../../interfaces/move.interface';

export class Move {
    public buffer: Array<IMove>;
    public selectedSquare: Maybe<IPosition>;

    constructor() {
        this.buffer = [];
        this.selectedSquare = null;
    }

    public selectSquare(row: number, column: number): void {
        this.selectedSquare = [
            row,
            column
        ];
    }

    public selectTile(letter: ILetter): void {
        if ($isNull(this.selectedSquare)) {
            return;
        }

        this.buffer.push({
            position: this.selectedSquare,
            letter
        });

        this.selectedSquare = null;
    }
}
