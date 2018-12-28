import { $isNull, ISerializable, Maybe } from '@cleavera/utils';
import { IDict } from '@cleavera/utils/dist';
import { ILetter } from '../../../tile';
import { LetterFactory } from '../../../tile/classes/letter/letter.factory';
import { IModifier } from '../../interfaces/modifier.interface';
import { Modifier } from '../modifier/modifier';

export class Square implements ISerializable {
    public tile: Maybe<ILetter>;
    public modifier: IModifier;
    public isRootTile: boolean;

    private constructor(modifier: IModifier, isRootTile: boolean = false) {
        this.modifier = modifier;
        this.isRootTile = isRootTile;
        this.tile = null;
    }

    public placeTile(tile: ILetter): void {
        this.tile = tile;
    }

    public serialize(): string {
        return JSON.stringify({
            m: this.modifier.serialize(),
            l: $isNull(this.tile) ? '0' : this.tile.id,
            r: this.isRootTile ? 't' : 'f'
        });
    }

    public static Deserialize(value: string): Square {
        const serial: IDict<string> = JSON.parse(value);
        const square: Square = new Square(Modifier.Deserialize(serial.m), serial.r === 't');

        if (!$isNull(serial.l) && serial.l !== '0') {
            LetterFactory.FromId(parseInt(serial.l, 10));
        }

        return square;
    }

    public static Start(): Square {
        return new Square(Modifier.None(), true);
    }

    public static Blank(): Square {
        return new Square(Modifier.None());
    }

    public static DoubleLetter(): Square {
        return new Square(Modifier.DoubleLetter());
    }

    public static TripleLetter(): Square {
        return new Square(Modifier.TripleLetter());
    }

    public static DoubleWord(): Square {
        return new Square(Modifier.DoubleWord());
    }

    public static TripleWord(): Square {
        return new Square(Modifier.TripleWord());
    }
}
