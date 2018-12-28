import { $isNull, ISerializable, Maybe } from '@cleavera/utils';
import { IDict } from '@cleavera/utils/dist';
import { Bag, ILetter } from '../../../tile';
import { LetterFactory } from '../../../tile/classes/letter/letter.factory';

export class Hand implements ISerializable {
    public tiles: Array<ILetter>;
    public size: number;
    private _bag: Bag;

    constructor(bag: Bag, size: number = 12) {
        this.size = size;
        this.tiles = [];
        this._bag = bag;
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

    public serialize(): string {
        return JSON.stringify({
            t: this.tiles.map((letter: ILetter) => {
                return letter.id;
            }),
            s: this.size.toString(10)
        });
    }

    public static Deserialize(value: string, bag: Bag): Hand {
        const serial: IDict<string> = JSON.parse(value);
        const size: number = parseInt(serial.s, 10);
        const hand: Hand = new Hand(bag, size);

        hand.tiles = (serial.t as any).map((id: number) => {
            return LetterFactory.FromId(id);
        });

        return hand;
    }
}
