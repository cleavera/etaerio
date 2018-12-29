import { SBoard } from '../../board/interfaces/board.serialized';
import { SHand } from '../../hand/interfaces/hand.serialised';
import { SBag } from '../../tile/interfaces/bag.serialized';

export interface SGame {
    g: SBoard;
    h: SHand;
    b: SBag;
}
