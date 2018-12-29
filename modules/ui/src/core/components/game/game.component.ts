import { Component, Input } from '@angular/core';
import { CHANGE_EVENT } from '../../../events';
import { Drink } from '../../../tile/constants/drinks.constant';
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
        const drinks: Array<string> = this.game.currentMove.points.map((point: number) => {
            return Drink[point];
        });

        const isComplete: boolean = confirm(`Please make sure to drink the following before completing your move: ${drinks.join(', ')}`);

        if (!isComplete) {
            return;
        }

        this.game.confirmMove();
        CHANGE_EVENT.next();
    }
}
