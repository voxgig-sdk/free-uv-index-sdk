"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeUvIndexError = void 0;
class FreeUvIndexError extends Error {
    isFreeUvIndexError = true;
    sdk = 'FreeUvIndex';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.FreeUvIndexError = FreeUvIndexError;
//# sourceMappingURL=FreeUvIndexError.js.map