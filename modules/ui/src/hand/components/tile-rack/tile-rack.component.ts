import { Component } from '@angular/core';
import { ILetter } from '../../../tile';
import { LetterD } from '../../../tile/classes/letter/letter-d';
import { LetterK } from '../../../tile/classes/letter/letter-k';

@Component({
    selector: 'hand-tile-rack',
    styleUrls: ['./tile-rack.component.scss'],
    templateUrl: './tile-rack.component.html'
})
export class TileRackComponent {
    public tiles: Array<ILetter> = [new LetterD(), new LetterK()];
}
