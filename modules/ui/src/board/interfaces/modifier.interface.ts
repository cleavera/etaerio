import { ISerializable } from '@cleavera/utils';
import { ModifierType } from '../constants/modifier-type.constant';

export interface IModifier extends ISerializable {
    type: ModifierType;
    value: 1 | 2 | 3;
}
