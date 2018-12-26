import { Component, Input } from '@angular/core';
import { Board } from '../../classes/board/board';

@Component({
    selector: 'board-board',
    styleUrls: ['./board.component.scss'],
    templateUrl: './board.component.html'
})
export class BoardComponent {
    @Input()
    public board: Board;
}
