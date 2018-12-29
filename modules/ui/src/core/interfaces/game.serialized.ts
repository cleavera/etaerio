import { SBoard } from '../../board';
import { SHand } from '../../hand';
import { SBag } from '../../tile';

export interface SGame {
    g: SBoard;
    h: SHand;
    b: SBag;
}
