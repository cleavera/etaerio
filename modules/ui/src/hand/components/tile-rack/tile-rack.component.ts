import { Component, Input } from '@angular/core';
import { $isNull } from '@cleavera/utils/dist';
import { Move } from '../../../core';
import { ILetter } from '../../../tile';
import { Hand } from '../../classes/hand/hand';

@Component({
    selector: 'hand-tile-rack',
    styleUrls: ['./tile-rack.component.scss'],
    templateUrl: './tile-rack.component.html'
})
export class TileRackComponent {
    @Input()
    public hand: Hand;

    @Input()
    public move: Move;

    public selectTile(tile: ILetter): void {
        if ($isNull(this.move.selectedSquare)) {
            return;
        }

        this.move.selectTile(tile);
        this.hand.play(tile);
    }
}
