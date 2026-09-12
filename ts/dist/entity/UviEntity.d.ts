import { FreeUvIndexEntityBase } from '../FreeUvIndexEntityBase';
import type { FreeUvIndexSDK } from '../FreeUvIndexSDK';
import type { Control } from '../types';
import type { Uvi, UviListMatch } from '../FreeUvIndexTypes';
declare class UviEntity extends FreeUvIndexEntityBase<Uvi> {
    constructor(client: FreeUvIndexSDK, entopts: any);
    make(this: UviEntity): UviEntity;
    list(this: any, reqmatch?: UviListMatch, ctrl?: Control): Promise<UviEntity[]>;
}
export { UviEntity };
