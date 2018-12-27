import { $isNull, ISerializable, Maybe } from '@cleavera/utils';
import { ILetter } from '../../../tile';
import { IModifier } from '../../interfaces/modifier.interface';
import { Modifier } from '../modifier/modifier';

export class Square implements ISerializable {
    public tile: Maybe<ILetter>;
    public modifier: IModifier;
    public isRootTile: boolean;

    private constructor(modifier: IModifier, isRootTile: boolean = false) {
        this.modifier = modifier;
        this.isRootTile = isRootTile;
    }

    public serialize(): string {
        const modifier: number = parseInt(this.modifier.serialize(), 36) + 27;
        const letter: number = $isNull(this.tile) ? 0 : this.tile.id;
        const isRootTile: number = 5 + 27 + (this.isRootTile ? 1 : 0);

        return (modifier + letter + isRootTile).toString(36);
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
