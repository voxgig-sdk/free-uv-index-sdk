# FreeUvIndex SDK utility: make_context

from core.context import FreeUvIndexContext


def make_context_util(ctxmap, basectx):
    return FreeUvIndexContext(ctxmap, basectx)
