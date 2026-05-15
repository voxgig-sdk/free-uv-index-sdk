<?php
declare(strict_types=1);

// FreeUvIndex SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FreeUvIndexFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FreeUvIndexBaseFeature();
            case "test":
                return new FreeUvIndexTestFeature();
            default:
                return new FreeUvIndexBaseFeature();
        }
    }
}
