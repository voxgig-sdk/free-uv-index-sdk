<?php
declare(strict_types=1);

// FreeUvIndex SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FreeUvIndexMakeContext
{
    public static function call(array $ctxmap, ?FreeUvIndexContext $basectx): FreeUvIndexContext
    {
        return new FreeUvIndexContext($ctxmap, $basectx);
    }
}
