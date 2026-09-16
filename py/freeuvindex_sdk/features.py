# FreeUvIndex SDK feature factory

from freeuvindex_sdk.feature.base_feature import FreeUvIndexBaseFeature
from freeuvindex_sdk.feature.ratelimit_feature import FreeUvIndexRatelimitFeature
from freeuvindex_sdk.feature.retry_feature import FreeUvIndexRetryFeature
from freeuvindex_sdk.feature.test_feature import FreeUvIndexTestFeature
from freeuvindex_sdk.feature.timeout_feature import FreeUvIndexTimeoutFeature


_FEATURES = {
    "base": lambda: FreeUvIndexBaseFeature(),
    "ratelimit": lambda: FreeUvIndexRatelimitFeature(),
    "retry": lambda: FreeUvIndexRetryFeature(),
    "test": lambda: FreeUvIndexTestFeature(),
    "timeout": lambda: FreeUvIndexTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
