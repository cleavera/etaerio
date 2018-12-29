import { Component, Input } from '@angular/core';
import { CHANGE_EVENT } from '../../../events';
import { Game } from '../../classes/game/game';

@Component({
    selector: 'core-game',
    styleUrls: ['./game.component.scss'],
    templateUrl: './game.component.html',
})
export class GameComponent {
    @Input()
    public game: Game;

    public onCancel(): void {
        this.game.cancelMove();
        CHANGE_EVENT.next();
    }

    public onConfirm(): void {
        this.game.confirmMove();
        CHANGE_EVENT.next();
    }
}
