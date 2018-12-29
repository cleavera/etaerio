import { IPosition, Maybe } from '@cleavera/utils/dist';
import { SPlacement } from './placement.serialized';

export interface SMove {
    b: Array<SPlacement>;
    s: Maybe<IPosition>;
}
