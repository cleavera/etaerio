import { $isNull, ISerializable, Maybe } from '@cleavera/utils';
import { Bag, ILetter, LetterFactory } from '../../../tile';
import { SHand } from '../../interfaces/hand.serialised';

export class Hand implements ISerializable<SHand> {
    public tiles: Array<ILetter>;
    public size: number;
    private _bag: Bag;

    constructor(bag: Bag, size: number = 12) {
        this.size = size;
        this.tiles = [];
        this._bag = bag;

        this.deal();
    }

    public add(tile: ILetter): void {
        this.tiles.push(tile);
    }

    public deal(): void {
        while (this.tiles.length < this.size) {
            this.add(this._bag.draw());
        }
    }

    public play(letter: ILetter): void {
        this.tiles.splice(this.tiles.reduce((index: Maybe<number>, tile: ILetter, i: number): Maybe<number> => {
            if (!$isNull(index)) {
                return index;
            }

            if (tile.id === letter.id) {
                return i;
            }

            return null;
        }, null) as number, 1);
    }

    public serialize(): SHand {
        return {
            t: this.tiles.map((letter: ILetter) => {
                return letter.id;
            }),
            s: this.size
        };
    }

    public static Deserialize(serial: SHand, bag: Bag): Hand {
        const hand: Hand = new Hand(bag, serial.s);

        hand.tiles = serial.t.map((id: number) => {
            return LetterFactory.FromId(id);
        });

        return hand;
    }
}
