import { Subject } from 'rxjs';
import { IChange } from '../interfaces/change.interface';

export const CHANGE_EVENT: Subject<IChange> = new Subject<IChange>();
