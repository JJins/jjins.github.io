<!DOCTYPE html>
<html class="html-devise-layout gl-system" lang="en">
<head>
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="width=device-width, initial-scale=1" name="viewport">
<title>Sign in · GitLab</title>
<script nonce="m/x2i3kPHbEfzQDztk0/Uw==">
//<![CDATA[
window.gon={};
//]]>
</script>

<script nonce="m/x2i3kPHbEfzQDztk0/Uw==">
//<![CDATA[
const root = document.documentElement;
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.classList.add('gl-dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (e.matches) {
    root.classList.add('gl-dark');
  } else {
    root.classList.remove('gl-dark');
  }
});

//]]>
</script>




<meta content="light dark" name="color-scheme">
<link rel="stylesheet" href="/assets/application-6b1e41f7f17cc86134abdd2925815e40edf13949c5c7d554c1f752b5ef426ca7.css" media="(prefers-color-scheme: light)" />
<link rel="stylesheet" href="/assets/application_dark-3952725d06c674bc1ec36c273b20d00b06a49a9257f58ea212cdbae47758bf18.css" media="(prefers-color-scheme: dark)" />
<link rel="stylesheet" href="/assets/page_bundles/login-7240ec00cf3969b710fe5e8959f8ef8eeff66d635ded28839b1b4256ae8d96a3.css" /><link rel="stylesheet" href="/assets/page_bundles/commit_description-9e7efe20f0cef17d0606edabfad0418e9eb224aaeaa2dae32c817060fa60abcc.css" /><link rel="stylesheet" href="/assets/page_bundles/work_items-9f34e9e1785e95144a97edb25299b8dd0d2e641f7efb2d8b7bea3717104ed8f2.css" /><link rel="stylesheet" href="/assets/page_bundles/notes_shared-a4dff941637ebef2cf76105ce3c2b1b2cb2c523f2af7710be4e47d6892e03c41.css" />
<link rel="stylesheet" href="/assets/tailwind_cqs-8fc5f01a95e81115af88b563c367313aa35f2f4341954085107d89e98a2b9241.css" />


<link rel="stylesheet" href="/assets/fonts-deb7ad1d55ca77c0172d8538d53442af63604ff490c74acc2859db295c125bdb.css" />
<link rel="stylesheet" href="/assets/highlight/themes/white-9669e20d2bac0337d55977e9ba6cf7540fcbb9d11ec33b69e51bae1d72e40db3.css" media="(prefers-color-scheme: light)" />
<link rel="stylesheet" href="/assets/highlight/themes/dark-c73a404d1f019e02345db3f656cde81011d1ed7ae616045770ab85f7deac07d6.css" media="(prefers-color-scheme: dark)" />

<script src="/assets/webpack/runtime.d841803d.bundle.js" defer="defer" nonce="m/x2i3kPHbEfzQDztk0/Uw=="></script>
<script src="/assets/webpack/main.b0e01097.chunk.js" defer="defer" nonce="m/x2i3kPHbEfzQDztk0/Uw=="></script>
<script src="/assets/webpack/tracker.85adcc5f.chunk.js" defer="defer" nonce="m/x2i3kPHbEfzQDztk0/Uw=="></script>
<script src="/assets/webpack/analytics.1f5b93d6.chunk.js" defer="defer" nonce="m/x2i3kPHbEfzQDztk0/Uw=="></script>
<script nonce="m/x2i3kPHbEfzQDztk0/Uw==">
//<![CDATA[
window.snowplowOptions = {"namespace":"gl","hostname":"snowplowprd.trx.gitlab.net","cookieDomain":".gitlab.com","appId":"gitlab","formTracking":true,"linkClickTracking":true}

gl = window.gl || {};
gl.snowplowStandardContext = {"schema":"iglu:com.gitlab/gitlab_standard/jsonschema/1-1-7","data":{"environment":"production","source":"gitlab-rails","correlation_id":"9a08a1d8b12f4b21-ATL","plan":null,"extra":{},"user_id":null,"global_user_id":null,"user_type":null,"is_gitlab_team_member":null,"namespace_id":null,"ultimate_parent_namespace_id":null,"project_id":null,"feature_enabled_by_namespace_ids":null,"realm":"saas","deployment_type":".com","instance_id":"ea8bf810-1d6f-4a6a-b4fd-93e8cbd8b57f","unique_instance_id":"b5fa1911-0638-5651-8ec4-5b892ef92e35","host_name":"gitlab.com","instance_version":"18.6.0","context_generated_at":"2025-11-18T15:51:57.686Z"}}
gl.snowplowPseudonymizedPageUrl = "https://gitlab.com/users/sign_in";
gl.maskedDefaultReferrerUrl = null;
gl.ga4MeasurementId = 'G-ENFH3X7M5Y';
gl.duoEvents = ["ai_question_category","perform_completion_worker","process_gitlab_duo_question","agent_platform_session_created","agent_platform_session_dropped","agent_platform_session_finished","agent_platform_session_resumed","agent_platform_session_started","agent_platform_session_stopped","ai_response_time","ci_repository_xray_artifact_created","cleanup_stuck_agent_platform_session","click_purchase_seats_button_group_duo_pro_home_page","code_suggestion_accepted_in_ide","code_suggestion_rejected_in_ide","code_suggestion_shown_in_ide","code_suggestions_connection_details_rate_limit_exceeded","code_suggestions_direct_access_rate_limit_exceeded","code_suggestions_rate_limit_exceeded","create_ai_catalog_item","create_ai_catalog_item_consumer","create_ai_self_hosted_model","default_answer","delete_ai_catalog_item","delete_ai_catalog_item_consumer","delete_ai_self_hosted_model","detected_high_comment_temperature","detected_repeated_high_comment_temperature","encounter_duo_code_review_error_during_review","error_answer","excluded_files_from_duo_code_review","execute_llm_method","find_no_issues_duo_code_review_after_review","find_nothing_to_review_duo_code_review_on_mr","finish_duo_workflow_execution","finish_mcp_tool_call","forced_high_temperature_commenting","i_quickactions_q","include_repository_xray_data_into_code_generation_prompt","mention_gitlabduo_in_mr_comment","post_comment_duo_code_review_on_diff","process_gitlab_duo_slash_command","react_thumbs_down_on_duo_code_review_comment","react_thumbs_up_on_duo_code_review_comment","request_ask_help","request_duo_chat_response","request_review_duo_code_review_on_mr_by_author","request_review_duo_code_review_on_mr_by_non_author","requested_comment_temperature","retry_duo_workflow_execution","start_duo_workflow_execution","start_mcp_tool_call","submit_gitlab_duo_question","tokens_per_embedding","tokens_per_user_request_prompt","tokens_per_user_request_response","trigger_ai_catalog_item","troubleshoot_job","update_ai_catalog_item","update_ai_catalog_item_consumer","update_ai_self_hosted_model","update_model_selection_feature","update_self_hosted_ai_feature_to_vendored_model","view_ai_catalog_item","view_ai_catalog_item_index"];
gl.onlySendDuoEvents = false;


//]]>
</script>
<link rel="preload" href="/assets/application-6b1e41f7f17cc86134abdd2925815e40edf13949c5c7d554c1f752b5ef426ca7.css" as="style" type="text/css" nonce="5gVsTv0OKB1bmMbr+jOYSw==">
<link rel="preload" href="/assets/highlight/themes/white-9669e20d2bac0337d55977e9ba6cf7540fcbb9d11ec33b69e51bae1d72e40db3.css" as="style" type="text/css" nonce="5gVsTv0OKB1bmMbr+jOYSw==">
<link crossorigin="" href="https://snowplowprd.trx.gitlab.net" rel="preconnect">
<link as="font" crossorigin="" href="/assets/gitlab-sans/GitLabSans-9892dc17af892e03de41625c0ee325117a3b8ee4ba6005f3a3eac68510030aed.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-sans/GitLabSans-Italic-f96f17332d67b21ada2dfba5f0c0e1d5801eab99330472057bf18edd93d4ccf7.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-mono/GitLabMono-29c2152dac8739499dd0fe5cd37a486ebcc7d4798c9b6d3aeab65b3172375b05.woff2" rel="preload">
<link as="font" crossorigin="" href="/assets/gitlab-mono/GitLabMono-Italic-af36701a2188df32a9dcea12e0424c380019698d4f76da9ad8ea2fd59432cf83.woff2" rel="preload">
<link rel="preload" href="/assets/fonts-deb7ad1d55ca77c0172d8538d53442af63604ff490c74acc2859db295c125bdb.css" as="style" type="text/css" nonce="5gVsTv0OKB1bmMbr+jOYSw==">



<script src="/assets/webpack/sentry.0847d0bf.chunk.js" defer="defer" nonce="m/x2i3kPHbEfzQDztk0/Uw=="></script>

<script src="/assets/webpack/commons-pages.groups.settings.work_items.show-super_sidebar.6f26c987.chunk.js" defer="defer" nonce="m/x2i3kPHbEfzQDztk0/Uw=="></script>
<script src="/assets/webpack/commons-pages.search.show-super_sidebar.4d8d8208.chunk.js" defer="defer" nonce="m/x2i3kPHbEfzQDztk0/Uw=="></script>
<script src="/assets/webpack/super_sidebar.75207bbf.chunk.js" defer="defer" nonce="m/x2i3kPHbEfzQDztk0/Uw=="></script>
<script src="/assets/webpack/commons-pages.admin.sessions-pages.groups.omniauth_callbacks-pages.ldap.omniauth_callbacks-pages.omn-aac29e51.bd1b73f2.chunk.js" defer="defer" nonce="m/x2i3kPHbEfzQDztk0/Uw=="></script>
<script src="/assets/webpack/pages.sessions.new.3831488b.chunk.js" defer="defer" nonce="m/x2i3kPHbEfzQDztk0/Uw=="></script>
<script nonce="m/x2i3kPHbEfzQDztk0/Uw==">
//<![CDATA[
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('consent', 'default', {
  'analytics_storage': 'granted',
  'ad_storage': 'granted',
  'functionality_storage': 'granted',
  'wait_for_update': 500
});

gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'functionality_storage': 'denied',
  'region': ['CA-QC', 'CO', 'EU', 'GB', 'IS', 'KR', 'LI', 'NO', 'PE', 'RU'],
  'wait_for_update': 500
});

 window.geofeed = (options) => {
    dataLayer.push({
      'event': 'OneTrustCountryLoad',
      'oneTrustCountryId': options.country.toString(),
      'oneTrustStateId': options.state?.toString()
    })
  }

  const json = document.createElement('script');
  json.setAttribute('src', 'https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location/geofeed');
  document.head.appendChild(json);

//]]>
</script><script nonce="m/x2i3kPHbEfzQDztk0/Uw==">
//<![CDATA[
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;j.setAttribute('nonce',
'm/x2i3kPHbEfzQDztk0/Uw==');f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NJXWQL');


//]]>
</script>
<!-- OneTrust -->
<script src="https://cdn.cookielaw.org/consent/7f944245-c5cd-4eed-a90e-dd955adfdd08/OtAutoBlock.js" defer="defer" nonce="m/x2i3kPHbEfzQDztk0/Uw=="></script>
<script nonce="m/x2i3kPHbEfzQDztk0/Uw==">
//<![CDATA[
const oneTrustScript = document.createElement('script');
oneTrustScript.src = 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js';
oneTrustScript.dataset.domainScript = '7f944245-c5cd-4eed-a90e-dd955adfdd08';
oneTrustScript.nonce = 'm/x2i3kPHbEfzQDztk0/Uw=='
oneTrustScript.charset = 'UTF-8';
oneTrustScript.defer = true;
document.head.appendChild(oneTrustScript);

function OptanonWrapper() { }


//]]>
</script>

<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="oMTaqgV3I5IhxUkSCC6npHMC2PIs3giS-HyYdSnmH4oiEKndVLeQ84qzEOe4Nqx_Dsvo31M9C3o0ciMuT0L8QA" />
<meta name="csp-nonce" content="m/x2i3kPHbEfzQDztk0/Uw==" />
<meta name="action-cable-url" content="/-/cable" />
<link href="/-/manifest.json" rel="manifest">
<link rel="icon" type="image/png" href="/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png" id="favicon" data-original-href="/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/apple-touch-icon-b049d4bc0dd9626f31db825d61880737befc7835982586d015bded10b4435460.png" />
<link href="/search/opensearch.xml" rel="search" title="Search GitLab" type="application/opensearchdescription+xml">




<meta content="GitLab.com" name="description">
<meta content="#ececef" name="theme-color">
</head>

<body class="gl-h-full login-page gl-browser-generic gl-platform-other" data-page="sessions:new" data-testid="login-page">

<script nonce="m/x2i3kPHbEfzQDztk0/Uw==">
//<![CDATA[
gl = window.gl || {};
gl.client = {"isGeneric":true,"isOther":true};


//]]>
</script>


<div class="gl-h-full gl-flex gl-flex-wrap">
<div class="container gl-self-center">
<main class="content">
<div class="flash-container flash-container-page sticky" data-testid="flash-container">
<div class="gl-alert gl-alert-info gl-alert-not-dismissible" role="alert">
<div class="gl-alert-icon-container">
<svg class="s16 gl-alert-icon gl-alert-icon-no-title" data-testid="information-o-icon"><use href="/assets/icons-4c8dcc4ae95b72054c5ab1467cf841cbe8c4717ac179b67e7e1f80a72d92038a.svg#information-o"></use></svg>
</div>
<div class="gl-alert-content" role="alert">
<div class="gl-alert-body">
<div class="gl-flex gl-items-center">
<div class="gl-grow">
Sign in or sign up before continuing. Don&#39;t have an account yet? Register now to get started.
</div>
</div>

</div>
<div class="gl-alert-actions">
<a class="gl-button btn btn-md btn-default btn-confirm" href="/users/sign_up"><span class="gl-button-text">
Register now
</span>

</a>

</div>
</div>
</div>

<div id="js-global-alerts"></div>
</div>

<div class="gl-my-5">
<div class="col-sm-12 gl-text-center">
<img alt="GitLab.com" class="gl-invisible gl-h-10 js-portrait-logo-detection lazy" data-src="/assets/logo-911de323fa0def29aaf817fca33916653fc92f3ff31647ac41d2c39bbe243edb.svg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
<h1 class="mb-3 gl-text-size-h2">
Sign in to GitLab
</h1>
</div>
<div class="gl-w-full gl-ml-auto gl-mr-auto bar sm:gl-w-1/2">
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJXWQL"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

<div class="js-non-oauth-login">
<form class="gl-show-field-errors js-arkose-labs-form" aria-live="assertive" data-testid="sign-in-form" action="/users/sign_in" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="VcjThGRGbk3R7b1A7p40_4SSB0WToQBHAvpF7MtoP7zXHKDzNYbdLHqb5LVehj8k-Vs3aOxCA6_O9P63rczcdg" autocomplete="off" /><div class="form-group">
<label for="user_login">Username or primary email</label>
<input class="form-control gl-form-input js-username-field" autocomplete="username" autofocus="autofocus" autocapitalize="off" autocorrect="off" required="required" title="Username or primary email is required." data-testid="username-field" type="text" name="user[login]" id="user_login" />
</div>
<div class="form-group">
<label for="user_password">Password</label>
<input class="form-control gl-form-input js-password" data-id="user_password" data-required="true" data-title="Password is required." data-name="user[password]" data-testid="password-field" type="password" name="user[password]" id="user_password" />
<div class="form-text gl-text-right">
<a href="/users/password/new">Forgot your password?</a>
</div>
</div>
<div class="form-group">
</div>
<div class="gl-mb-3">
<div class="gl-form-checkbox custom-control custom-checkbox">
<input name="user[remember_me]" type="hidden" value="0" autocomplete="off" /><input autocomplete="off" class="custom-control-input" type="checkbox" value="1" name="user[remember_me]" id="user_remember_me" />
<label class="custom-control-label" for="user_remember_me"><span>Remember me</span></label>
</div>

</div>
<button class="gl-button btn btn-block btn-md btn-confirm js-sign-in-button" data-testid="sign-in-button" type="submit"><span class="gl-button-text">
Sign in

</span>

</button></form>
</div>
<div class="gl-mt-3">
By signing in you accept the <a href='/-/users/terms' target='_blank' rel='noreferrer noopener'>Terms of Use and acknowledge the Privacy Statement and Cookie Policy</a>.
</div>
<div class="gl-mt-3 gl-text-center">
Don&#39;t have an account yet?
<a data-testid="register-link" data-track-action="click_register_from_sign_in_page" data-track-label="free_registration" href="/users/sign_up">Register now</a>
</div>
<div class="gl-flex gl-items-center gl-gap-5" data-testid="divider">
<hr class="gl-grow gl-border-default">
or sign in with
<hr class="gl-grow gl-border-default">
</div>

<div class="gl-mt-5 gl-text-center gl-flex gl-flex-col gl-gap-3 js-oauth-login">
<form class="js-omniauth-form" method="post" action="/users/auth/google_oauth2"><button class="gl-button btn btn-block btn-md btn-default " type="submit"><span class="gl-button-text">
<img alt="Google" title="Sign in with Google" class="gl-button-icon lazy" data-src="/assets/auth_buttons/google_64-9ab7462cd2115e11f80171018d8c39bd493fc375e83202fbb6d37a487ad01908.png" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
<span class="gl-button-text">
Google
</span>

</span>

</button><input type="hidden" name="authenticity_token" value="1leso7q6dhFIrRswtl43GrteGOJn39BSXv59ho7VHI1Ug9_U63rFcOPbQsUGRjzBxpcozxg807qS8Mbd6HH_Rw" autocomplete="off" /></form>
<form class="js-omniauth-form" method="post" action="/users/auth/github"><button class="gl-button btn btn-block btn-md btn-default " data-testid="github-login-button" type="submit"><span class="gl-button-text">
<img alt="GitHub" title="Sign in with GitHub" class="gl-button-icon lazy" data-src="/assets/auth_buttons/github_64-84041cd0ea392220da96f0fb9b9473c08485c4924b98c776be1bd33b0daab8c0.png" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
<span class="gl-button-text">
GitHub
</span>

</span>

</button><input type="hidden" name="authenticity_token" value="-m_FXBqMbp1TNdM0CgjUFTNB9MBM2W1oQzngki-uEbR4u7YrS0zd_PhDisG6EN_OTojE7TM6boCPN1vJSQryfg" autocomplete="off" /></form>
<form class="js-omniauth-form" method="post" action="/users/auth/bitbucket"><button class="gl-button btn btn-block btn-md btn-default " type="submit"><span class="gl-button-text">
<img alt="Bitbucket" title="Sign in with Bitbucket" class="gl-button-icon lazy" data-src="/assets/auth_buttons/bitbucket_64-daa496030c0c290748e3c2e50f7464d2f5de0e019cce728930e0508a6dac815c.png" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
<span class="gl-button-text">
Bitbucket
</span>

</span>

</button><input type="hidden" name="authenticity_token" value="niZoKoo6os-HBgweic8NfhwzntnkC5BtVFfM6X-tevwc8htd2_oRrixwVes51walYfqu9Jvok4WYWXeyGQmZNg" autocomplete="off" /></form>
<form class="js-omniauth-form" method="post" action="/users/auth/salesforce"><button class="gl-button btn btn-block btn-md btn-default " type="submit"><span class="gl-button-text">
<span class="gl-button-text">
Salesforce
</span>

</span>

</button><input type="hidden" name="authenticity_token" value="m13oVnXMQd9gPnuzgai3GHVsC81AAIPy8PkYtGf-BuMZiZshJAzyvstIIkYxsLzDCKU74D_jgBo896PvAVrlKQ" autocomplete="off" /></form>
<div class="gl-form-checkbox custom-control custom-checkbox">
<input type="checkbox" name="js-remember-me-omniauth" id="js-remember-me-omniauth" class="custom-control-input" />
<label class="custom-control-label" for="js-remember-me-omniauth"><span>Remember me
</span></label>
</div>
</div>


</div>
</div>
</main>
</div>
<div class="footer-container gl-w-full gl-self-end">
<hr class="gl-m-0">
<div class="container gl-py-5 gl-flex gl-justify-between gl-items-start">
<div class="gl-hidden md:gl-flex gl-gap-5 gl-flex-wrap">
<a href="/explore">Explore</a>
<a href="/help">Help</a>
<a href="https://about.gitlab.com">About GitLab</a>
<a target="_blank" class="text-nowrap" rel="noopener noreferrer" href="https://forum.gitlab.com">GitLab community forum</a>
</div>
<button class="gl-button btn btn-sm btn-default btn-default-tertiary ot-sdk-show-settings" type="button"><span class="gl-button-text">
Cookie Preferences

</span>

</button><div class="js-language-switcher" data-locales="[{&quot;value&quot;:&quot;en&quot;,&quot;percentage&quot;:100,&quot;text&quot;:&quot;English&quot;},{&quot;value&quot;:&quot;ko&quot;,&quot;percentage&quot;:99,&quot;text&quot;:&quot;한국어&quot;},{&quot;value&quot;:&quot;ga_IE&quot;,&quot;percentage&quot;:99,&quot;text&quot;:&quot;Irish&quot;},{&quot;value&quot;:&quot;ja&quot;,&quot;percentage&quot;:97,&quot;text&quot;:&quot;日本語&quot;},{&quot;value&quot;:&quot;de&quot;,&quot;percentage&quot;:97,&quot;text&quot;:&quot;Deutsch&quot;},{&quot;value&quot;:&quot;pt_BR&quot;,&quot;percentage&quot;:95,&quot;text&quot;:&quot;português (Brasil)&quot;},{&quot;value&quot;:&quot;fr&quot;,&quot;percentage&quot;:95,&quot;text&quot;:&quot;français&quot;}]"></div>

</div>
</div>


</div>
</body>
</html>
