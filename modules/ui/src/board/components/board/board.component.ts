import { Component, Input } from '@angular/core';
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

    public ngOnInit(): void {
        this.board.grid[0][2].tile = new LetterA();
    }
}
