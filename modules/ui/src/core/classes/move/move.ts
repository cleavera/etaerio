import { IPosition, Maybe } from '@cleavera/utils';
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
}
