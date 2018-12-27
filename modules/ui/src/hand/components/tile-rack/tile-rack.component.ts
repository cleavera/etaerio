import { Component, Input } from '@angular/core';
import { Hand } from '../../classes/hand';

@Component({
    selector: 'hand-tile-rack',
    styleUrls: ['./tile-rack.component.scss'],
    templateUrl: './tile-rack.component.html'
})
export class TileRackComponent {
    @Input()
    public hand: Hand;
}
