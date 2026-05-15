<?php
declare(strict_types=1);

// FreeUvIndex SDK utility: result_headers

class FreeUvIndexResultHeaders
{
    public static function call(FreeUvIndexContext $ctx): ?FreeUvIndexResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
