import { ISerializable } from '@cleavera/utils';
import { ModifierType } from '../constants/modifier-type.constant';
import { SModifier } from './modifier.serialized';

export interface IModifier extends ISerializable<SModifier> {
    type: ModifierType;
    value: 1 | 2 | 3;
}
