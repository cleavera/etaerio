import { Component, ViewEncapsulation } from '@angular/core';
import { Board } from '../../../board';

@Component({
    selector: 'core-app',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public board: Board;

    constructor() {
        this.board = new Board();
    }
}
