import { SBoard } from '../../board';
import { SHand } from '../../hand';
import { SMove } from '../../move';
import { SBag } from '../../tile';

export interface SGame {
    g: SBoard;
    h: SHand;
    b: SBag;
    m: Array<SMove>;
}
