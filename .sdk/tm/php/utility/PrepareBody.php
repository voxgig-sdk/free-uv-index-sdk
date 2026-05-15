<?php
declare(strict_types=1);

// FreeUvIndex SDK utility: prepare_body

class FreeUvIndexPrepareBody
{
    public static function call(FreeUvIndexContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
