import { Component, ViewEncapsulation } from '@angular/core';
import { $isNull, Maybe } from '@cleavera/utils';
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
        const serial: Maybe<string> = localStorage.getItem('game');

        if ($isNull(serial)) {
            this.game = new Game();
        } else {
            this.game = Game.Deserialize(JSON.parse(serial));
        }

        setInterval(() => {
            localStorage.setItem('game', JSON.stringify(this.game.serialize()));
        }, 10000);
    }
}
