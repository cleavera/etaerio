import { Component, Input } from '@angular/core';
import { $isNull } from '@cleavera/utils';
import { Move } from '../../../core';
import { LetterA } from '../../../tile/classes/letter/letter-a';
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

    public ngOnInit(): void {
        this.board.grid[0][2].tile = new LetterA();
    }

    public selectSquare(row: number, col: number): void {
        this.move.selectSquare(row, col);
    }

    public isSelected(row: number, col: number): boolean {
        return !$isNull(this.move.selectedSquare) && this.move.selectedSquare[0] === row && this.move.selectedSquare[1] === col;
    }
}
