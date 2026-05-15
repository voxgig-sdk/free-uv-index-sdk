<?php
declare(strict_types=1);

// FreeUvIndex SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FreeUvIndexUtility::setRegistrar(function (FreeUvIndexUtility $u): void {
    $u->clean = [FreeUvIndexClean::class, 'call'];
    $u->done = [FreeUvIndexDone::class, 'call'];
    $u->make_error = [FreeUvIndexMakeError::class, 'call'];
    $u->feature_add = [FreeUvIndexFeatureAdd::class, 'call'];
    $u->feature_hook = [FreeUvIndexFeatureHook::class, 'call'];
    $u->feature_init = [FreeUvIndexFeatureInit::class, 'call'];
    $u->fetcher = [FreeUvIndexFetcher::class, 'call'];
    $u->make_fetch_def = [FreeUvIndexMakeFetchDef::class, 'call'];
    $u->make_context = [FreeUvIndexMakeContext::class, 'call'];
    $u->make_options = [FreeUvIndexMakeOptions::class, 'call'];
    $u->make_request = [FreeUvIndexMakeRequest::class, 'call'];
    $u->make_response = [FreeUvIndexMakeResponse::class, 'call'];
    $u->make_result = [FreeUvIndexMakeResult::class, 'call'];
    $u->make_point = [FreeUvIndexMakePoint::class, 'call'];
    $u->make_spec = [FreeUvIndexMakeSpec::class, 'call'];
    $u->make_url = [FreeUvIndexMakeUrl::class, 'call'];
    $u->param = [FreeUvIndexParam::class, 'call'];
    $u->prepare_auth = [FreeUvIndexPrepareAuth::class, 'call'];
    $u->prepare_body = [FreeUvIndexPrepareBody::class, 'call'];
    $u->prepare_headers = [FreeUvIndexPrepareHeaders::class, 'call'];
    $u->prepare_method = [FreeUvIndexPrepareMethod::class, 'call'];
    $u->prepare_params = [FreeUvIndexPrepareParams::class, 'call'];
    $u->prepare_path = [FreeUvIndexPreparePath::class, 'call'];
    $u->prepare_query = [FreeUvIndexPrepareQuery::class, 'call'];
    $u->result_basic = [FreeUvIndexResultBasic::class, 'call'];
    $u->result_body = [FreeUvIndexResultBody::class, 'call'];
    $u->result_headers = [FreeUvIndexResultHeaders::class, 'call'];
    $u->transform_request = [FreeUvIndexTransformRequest::class, 'call'];
    $u->transform_response = [FreeUvIndexTransformResponse::class, 'call'];
});
