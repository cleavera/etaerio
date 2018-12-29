import { $isNull, ISerializable, Maybe } from '@cleavera/utils';
import { ILetter } from '../../../tile';
import { LetterFactory } from '../../../tile/classes/letter/letter.factory';
import { IModifier } from '../../interfaces/modifier.interface';
import { SSquare } from '../../interfaces/square.serialized';
import { Modifier } from '../modifier/modifier';

export class Square implements ISerializable<SSquare> {
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

    public serialize(): SSquare {
        return {
            m: this.modifier.serialize(),
            l: $isNull(this.tile) ? 0 : this.tile.id,
            r: this.isRootTile
        };
    }

    public static Deserialize(serial: SSquare): Square {
        const square: Square = new Square(Modifier.Deserialize(serial.m), serial.r);

        if (!$isNull(serial.l) && serial.l !== 0) {
            square.tile = LetterFactory.FromId(serial.l);
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
