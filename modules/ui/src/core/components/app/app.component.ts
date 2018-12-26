import { Component } from '@angular/core';
import { Board } from '../../../board';

@Component({
    selector: 'core-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    public board: Board;

    constructor() {
        this.board = new Board();
    }
}
