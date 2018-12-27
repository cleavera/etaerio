import { Component, ViewEncapsulation } from '@angular/core';
import { Game } from '../../classes/game/game';

@Component({
    selector: 'core-app',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public game: Game;

    constructor() {
        this.game = new Game();
    }

    public onCancel(): void {
        this.game.cancelMove();
    }

    public onConfirm(): void {
        this.game.confirmMove();
    }
}
