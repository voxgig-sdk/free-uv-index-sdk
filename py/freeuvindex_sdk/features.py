# FreeUvIndex SDK feature factory

from freeuvindex_sdk.feature.base_feature import FreeUvIndexBaseFeature
from freeuvindex_sdk.feature.test_feature import FreeUvIndexTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FreeUvIndexBaseFeature(),
        "test": lambda: FreeUvIndexTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
