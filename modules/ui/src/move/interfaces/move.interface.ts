import { IPosition } from '@cleavera/utils';
import { ILetter } from '../../tile';

export interface IMove {
    letter: ILetter;
    position: IPosition;
}
