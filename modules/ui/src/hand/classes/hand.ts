import { ILetter } from '../../tile';
import { LetterA } from '../../tile/classes/letter/letter-a';

export class Hand {
    public tiles: Array<ILetter>;
    public size: number;

    constructor(size: number = 12) {
        this.size = size;
        this.tiles = [];
    }

    public deal(): void {
        while (this.tiles.length <= this.size) {
            this.tiles.push(new LetterA());
        }
    }
}
