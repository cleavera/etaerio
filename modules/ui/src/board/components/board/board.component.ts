import { Component, Input } from '@angular/core';
import { $isNull, Maybe } from '@cleavera/utils';
import { IPlacement, Move } from '../../../move';
import { ILetter } from '../../../tile';
import { Board } from '../../classes/board/board';

@Component({
    selector: 'board-board',
    styleUrls: ['./board.component.scss'],
    templateUrl: './board.component.html'
})
export class BoardComponent {
    @Input()
    public board: Board;

    @Input()
    public move: Move;

    public selectSquare(row: number, col: number): void {
        this.move.selectSquare(row, col);
    }

    public isSelected(row: number, col: number): boolean {
        return !$isNull(this.move.selectedSquare) && this.move.selectedSquare[0] === row && this.move.selectedSquare[1] === col;
    }

    public getTile(row: number, col: number): ILetter | void {
        const tile: Maybe<ILetter> = this.board.grid[row][col].tile || null;

        if (!$isNull(tile)) {
            return tile;
        }

        const matchedMove: Maybe<IPlacement> = this.move.buffer.find((move: IPlacement) => {
            return move.position[0] === row && move.position[1] === col;
        }) || null;

        if (!$isNull(matchedMove)) {
            return matchedMove.letter;
        }
    }
}
