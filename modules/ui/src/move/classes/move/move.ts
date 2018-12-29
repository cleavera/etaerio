import { $isNull, IPosition, ISerializable, Maybe } from '@cleavera/utils';
import { ILetter, LetterFactory } from '../../../tile';
import { SMove } from '../../interfaces/move.serialized';
import { IPlacement } from '../../interfaces/placement.interface';
import { SPlacement } from '../../interfaces/placement.serialized';

export class Move implements ISerializable<SMove> {
    public buffer: Array<IPlacement>;
    public selectedSquare: Maybe<IPosition>;

    public get points(): Array<number> {
        return this.buffer.map((placement: IPlacement) => {
            return placement.letter.score;
        });
    }

    constructor(buffer: Array<IPlacement> = [], selectedSquare: Maybe<IPosition> = null) {
        this.buffer = buffer;
        this.selectedSquare = selectedSquare;
    }

    public selectSquare(row: number, column: number): void {
        this.selectedSquare = [
            row,
            column
        ];
    }

    public selectTile(letter: ILetter): void {
        if ($isNull(this.selectedSquare)) {
            return;
        }

        this.buffer.push({
            position: this.selectedSquare,
            letter
        });

        this.selectedSquare = null;
    }

    public clear(): void {
        this.buffer = [];
    }

    public serialize(): SMove {
        return {
            b: this.buffer.map((placement: IPlacement): SPlacement => {
                return {
                    p: placement.position,
                    l: placement.letter.id
                };
            }),
            s: this.selectedSquare
        };
    }

    public static Deserialize(serial: SMove): Move {
        return new Move(serial.b.map((placement: SPlacement): IPlacement => {
            return {
                position: placement.p,
                letter: LetterFactory.FromId(placement.l)
            };
        }), serial.s);
    }
}
