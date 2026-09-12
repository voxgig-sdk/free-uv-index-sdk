import { Context } from './Context';
declare class FreeUvIndexError extends Error {
    isFreeUvIndexError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FreeUvIndexError };
