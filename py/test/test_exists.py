# ProjectName SDK exists test

import pytest
from freeuvindex_sdk import FreeUvIndexSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FreeUvIndexSDK.test(None, None)
        assert testsdk is not None
