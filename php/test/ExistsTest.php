<?php
declare(strict_types=1);

// FreeUvIndex SDK exists test

require_once __DIR__ . '/../freeuvindex_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FreeUvIndexSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
