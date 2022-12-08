<!DOCTYPE html>
<html class="ng-csp" data-placeholder-focus="false" lang="<?php p($_['language']); ?>" data-locale="<?php p($_['locale']); ?>">
<head data-user="<?php p($_['user_uid']); ?>" data-user-displayname="<?php p($_['user_displayname']); ?>" data-requesttoken="<?php p($_['requesttoken']); ?>">

  <meta charset="utf-8">
  <title>
    <?php
    p(!empty($_['application']) ? $_['application'] . ' - ' : '');
    p($theme->getTitle());
    ?>
  </title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <?php if ($theme->getiTunesAppId() !== '') { ?>
    <meta name="apple-itunes-app" content="app-id=<?php p($theme->getiTunesAppId()); ?>">
  <?php } ?>

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="<?php p((!empty($_['application']) && $_['appid'] != 'files') ? $_['application'] : $theme->getTitle()); ?>">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="theme-color" content="<?php p($theme->getColorPrimary()); ?>">
  <link rel="icon" href="<?php print_unescaped(image_path($_['appid'], 'favicon.ico')); /* IE11+ supports png */ ?>">
  <link rel="apple-touch-icon" href="<?php print_unescaped(image_path($_['appid'], 'favicon-touch.png')); ?>">
  <link rel="apple-touch-icon-precomposed" href="<?php print_unescaped(image_path($_['appid'], 'favicon-touch.png')); ?>">
  <link rel="mask-icon" sizes="any" href="<?php print_unescaped('/themes/nextmagentacloud21/core/img/favicon-mask.svg'); ?>" color="<?php p($theme->getColorPrimary()); ?>">
  <link rel="manifest" href="<?php print_unescaped('/themes/nextmagentacloud21/core/img/manifest.json'); ?>">

  <?php
  /* Get tealium config  */
    use OCP\IConfig;
    $config = \OC::$server->get(IConfig::class);
    $tealiumConfig = $config->getSystemValue('tealium');
    if($tealiumConfig && $tealiumConfig['enable']){ ?>
    <!--TODO :Trying to load Telium library directly from CDN -->
      <script type="text/javascript" nonce="<?php p(\OC::$server->getContentSecurityPolicyNonceManager()->getNonce()) ?>"
    src="<?php echo $tealiumConfig['url'];?>"></script>
  <?php } ?>
  <?php emit_css_loading_tags($_); ?>
  <?php emit_script_loading_tags($_); ?>
  <?php print_unescaped($_['headers']); ?>

</head>

<body id="<?php p($_['bodyid']); ?>">
  <?php include 'layout.noscript.warning.php'; ?>

  <?php foreach ($_['initialStates'] as $app => $initialState) { ?>
    <input type="hidden" id="initial-state-<?php p($app); ?>" value="<?php p(base64_encode($initialState)); ?>">
  <?php } ?>

  <a href="#app-content" class="button primary skip-navigation skip-content"><?php p($l->t('Skip to main content')); ?></a>
  <a href="#app-navigation" class="button primary skip-navigation"><?php p($l->t('Skip to navigation of app')); ?></a>

  <div id="notification-container">
    <div id="notification"></div>
  </div>

  <div class="MenuWrapperParent">
    <div class="brandbar">
      <div class="container-fixed">
        <div class="header-brandbar">
          <a href="/en" title="Home" class="header-brandbar-logo">
            <svg id="brand-logo" viewBox="0 0 153 38" width="153" height="38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor">
              <g fill="#fff">
                <path d="m7.6 25.1h-7.6v-7.6h7.6zm-7.6-25.1v12.9h2.3v-.4c0-6.1 3.4-9.9 9.9-9.9h.4v27.4c0 3.8-1.5 5.3-5.3 5.3h-1.2v2.7h19.8v-2.7h-1.1c-3.8 0-5.3-1.5-5.3-5.3v-27.3h.4c6.5 0 9.9 3.8 9.9 9.9v.4h2.3v-13zm24.3 25.1h7.6v-7.6h-7.6z"></path>
                <path d="m61.2 16.3h-6.5v-11.4h6.5v1.6h-4.7v3.1h4.5v1.6h-4.5v3.4h4.7zm5.6-6.6h.6v-1.5c-.1-.1-.3-.1-.6-.1-.4 0-.8.1-1.2.3s-.6.5-.8.9h-.1v-1.1h-1.6v8.1h1.7v-4.5c0-.5.1-.9.2-1.2s.4-.5.7-.7c.3-.1.7-.2 1.1-.2zm3.9 6.8c.3 0 .7-.1 1-.2v-1.3c-.2 0-.4 0-.6 0s-.3-.1-.4-.2-.1-.3-.1-.5v-9.4h-1.7v9.7c0 .6.2 1.1.5 1.4s.7.5 1.3.5zm2.4-1.9c-.3-.7-.4-1.4-.4-2.3s.1-1.7.4-2.3.7-1.1 1.2-1.5c.5-.3 1.2-.5 1.9-.5s1.3.2 1.8.5.9.8 1.2 1.4.4 1.3.4 2.2v.3.3h-5.3c0 .8.2 1.4.5 1.8.3.5.8.7 1.4.7.4 0 .8-.1 1-.3.3-.2.5-.4.6-.8h1.7c-.2.8-.6 1.4-1.2 1.8s-1.3.6-2.2.6c-.7 0-1.3-.2-1.9-.5-.4-.3-.8-.8-1.1-1.4zm1.6-4.5c-.2.3-.4.7-.4 1.3h3.7c-.1-.6-.2-1-.4-1.3-.3-.4-.8-.6-1.4-.6-.6-.1-1.1.2-1.5.6zm9.3 6.1c-.4-.3-.7-.6-.9-1.1h-.1v1.2h-1.6v-11.4h1.6v4.3h.1c.2-.4.6-.7.9-.9.5-.2.9-.3 1.4-.3.7 0 1.2.2 1.7.5s.8.8 1.1 1.5c.2.6.4 1.4.4 2.3s-.1 1.6-.4 2.3c-.2.6-.6 1.1-1.1 1.5-.5.3-1 .5-1.7.5-.5 0-1-.1-1.4-.4zm1-1.2c.6 0 1.1-.2 1.4-.7s.5-1.2.5-2.1-.2-1.6-.5-2c-.3-.5-.8-.7-1.4-.7s-1.1.2-1.4.7-.5 1.2-.5 2c0 .9.2 1.6.5 2 .2.6.7.8 1.4.8zm8.4 1.6c-.7 0-1.3-.2-1.9-.5-.5-.3-.9-.8-1.2-1.5s-.4-1.4-.4-2.3.1-1.7.4-2.3.7-1.1 1.2-1.5c.6-.3 1.2-.5 1.9-.5s1.3.2 1.8.5.9.8 1.2 1.4.4 1.3.4 2.2v.3.3h-5.3c0 .8.2 1.4.5 1.8.3.5.8.7 1.4.7.4 0 .8-.1 1-.3.3-.2.5-.4.6-.8h1.7c-.2.8-.6 1.4-1.2 1.8-.5.5-1.3.7-2.1.7zm-1.4-6.5c-.2.3-.4.7-.4 1.3h3.7c-.1-.6-.2-1-.4-1.3-.3-.4-.8-.6-1.4-.6-.7-.1-1.2.2-1.5.6zm10.5-2.1c-.5 0-1 .1-1.4.3s-.7.6-.9 1h-.1v-1.1h-1.6v8.1h1.7v-4.6c0-.7.2-1.2.5-1.6s.7-.6 1.3-.6c.5 0 .8.1 1 .4s.3.7.3 1.2v5.2h1.7v-5.3c0-1-.2-1.7-.6-2.2-.4-.6-1-.8-1.9-.8zm6.2 10.3c.3-.5.5-1.1.5-2.1v-2.1h-2.2v2.2h1.1v.1c0 .4 0 .7-.1.9s-.2.4-.3.5c-.2.1-.4.2-.6.2v1c.7 0 1.2-.2 1.6-.7zm-46.9 12.1h-.1l-1.4-5.5h-1.8l-1.5 5.5h-.1l-1.5-5.5h-1.7l2.3 8.1h1.7l1.5-5.4h.1l1.5 5.4h1.7l2.3-8.1h-1.7zm10.6 1.4c.1 0 .3 0 .4-.1v1.3c-.1.1-.3.1-.4.1-.2 0-.3.1-.5.1-.4 0-.8-.1-1-.3s-.4-.4-.4-.8h-.1c-.2.4-.6.7-.9.9-.4.2-.9.3-1.4.3-.8 0-1.4-.2-1.8-.6s-.6-1-.6-1.7c0-.9.4-1.6 1.1-2.1s1.8-.7 3.1-.7h.5v-.4c0-.5-.1-.9-.3-1.2s-.6-.4-1.1-.4c-.4 0-.7.1-.9.3s-.4.5-.4.8h-1.6c.1-.8.4-1.4.9-1.8s1.2-.6 2.1-.6c1 0 1.8.3 2.3.8.5.6.8 1.3.8 2.2v3.5c0 .2 0 .3.1.4-.1-.1 0 0 .1 0zm-2.3-1c.2-.3.2-.7.2-1.1v-.4h-.5c-.8 0-1.5.1-1.9.4-.4.2-.6.6-.6 1.1 0 .4.1.7.3.9s.5.3.9.3.7-.1 1-.3c.2-.3.4-.6.6-.9zm7.4-2.4-1-.3c-.3-.1-.6-.2-.7-.4-.2-.2-.2-.4-.2-.6 0-.3.1-.6.3-.7.2-.2.5-.3.9-.3.3 0 .6.1.8.3s.3.5.4.8h1.6c-.1-.8-.4-1.4-.9-1.8s-1.2-.7-2-.7c-.6 0-1.1.1-1.5.3s-.8.5-1 .9-.4.8-.4 1.2c0 .7.2 1.2.5 1.6s.8.6 1.4.8l1 .3c.4.1.6.2.8.4s.3.4.3.7-.1.6-.3.8-.5.3-.9.3-.7-.1-.9-.3-.4-.4-.5-.8h-1.6c.1.8.4 1.4.9 1.8s1.2.6 2.1.6 1.6-.2 2.1-.7.8-1.1.8-1.8c0-.6-.2-1.1-.5-1.5s-.8-.7-1.5-.9zm9.9 2.3h-.1l-1.8-5.7h-1.8l2.8 8.1h1.8l2.8-8.1h-1.8zm10.9-4.1c.3.6.4 1.3.4 2.2v.3.3h-5.3c0 .8.2 1.4.5 1.8.3.5.8.7 1.4.7.4 0 .8-.1 1-.3.3-.2.5-.4.6-.8h1.7c-.2.8-.6 1.4-1.2 1.8s-1.3.6-2.2.6c-.7 0-1.3-.2-1.9-.5-.5-.3-.9-.8-1.2-1.5s-.4-1.4-.4-2.3.1-1.7.4-2.3.7-1.1 1.2-1.5c.5-.3 1.2-.5 1.9-.5s1.3.2 1.8.5c.7.4 1.1.9 1.3 1.5zm-4.4.2c-.2.3-.4.7-.4 1.3h3.7c-.1-.6-.2-1-.4-1.3-.3-.4-.8-.6-1.4-.6-.7-.1-1.2.2-1.5.6zm9.1-1.7c-.4.2-.6.5-.8.9h-.1v-1.1h-1.6v8.1h1.7v-4.5c0-.5.1-.9.2-1.2s.4-.5.7-.7.7-.2 1.1-.2h.6v-1.5c-.1-.1-.3-.1-.6-.1-.4 0-.8.1-1.2.3zm10 1.6c.2.6.4 1.4.4 2.3s-.1 1.6-.4 2.3c-.2.6-.6 1.1-1.1 1.5-.5.3-1 .5-1.7.5-.5 0-1-.1-1.4-.4s-.7-.6-.9-1.1h-.1v1.2h-1.6v-11.3h1.7v4.3h.1c.2-.4.6-.7.9-.9.4-.2.8-.3 1.3-.3.7 0 1.2.2 1.7.5s.9.8 1.1 1.4zm-1.3 2.3c0-.9-.2-1.6-.5-2-.3-.5-.8-.7-1.4-.7s-1.1.2-1.4.7-.5 1.2-.5 2c0 .9.2 1.6.5 2 .3.5.8.7 1.4.7s1.1-.2 1.4-.7c.3-.4.5-1.1.5-2zm3.5-5.5h1.7v-1.8h-1.7zm0 9.6h1.7v-8.1h-1.7zm7.8-8.4c-.5 0-1 .1-1.4.3s-.7.6-.9 1h-.1v-1.1h-1.6v8.1h1.7v-4.6c0-.7.2-1.2.5-1.6s.7-.6 1.3-.6c.5 0 .8.1 1 .4s.3.7.3 1.2v5.2h1.7v-5.4c0-1-.2-1.7-.6-2.2-.4-.4-1.1-.7-1.9-.7zm9.7-3h1.7v11.4h-1.6v-1.2h-.1c-.2.4-.5.8-.9 1.1s-.9.4-1.4.4c-.7 0-1.2-.2-1.7-.5s-.8-.8-1.1-1.5c-.2-.6-.4-1.4-.4-2.3s.1-1.7.4-2.3c.2-.6.6-1.1 1.1-1.5.5-.3 1.1-.5 1.7-.5.5 0 1 .1 1.3.3.4.2.7.5.9.9h.1zm0 7.3c0-.9-.2-1.6-.5-2-.3-.5-.8-.7-1.4-.7s-1.1.2-1.5.7c-.3.5-.5 1.2-.5 2 0 .9.2 1.6.5 2 .3.5.8.7 1.5.7.6 0 1.1-.2 1.4-.7.4-.4.5-1.1.5-2zm10-2.4c.3.6.4 1.3.4 2.2v.3.3h-5.3c0 .8.2 1.4.5 1.8.3.5.8.7 1.4.7.4 0 .8-.1 1-.3.3-.2.5-.4.6-.8h1.7c-.2.8-.6 1.4-1.2 1.8s-1.3.6-2.2.6c-.7 0-1.3-.2-1.9-.5-.5-.3-.9-.8-1.2-1.5s-.4-1.4-.4-2.3.1-1.7.4-2.3.7-1.1 1.2-1.5c.5-.3 1.2-.5 1.9-.5s1.3.2 1.8.5c.6.4 1 .9 1.3 1.5zm-4.4.2c-.2.3-.4.7-.4 1.3h3.7c-.1-.6-.2-1-.4-1.3-.3-.4-.8-.6-1.4-.6-.7-.1-1.2.2-1.5.6zm8.8-4.7h-.3l-1.3 1.3v1.5h-1.5v1.4h1.5v4.5c0 .8.2 1.3.6 1.7s1 .6 1.6.6 1.1-.1 1.5-.3v-1.3c-.3.1-.7.1-1 .2-.3 0-.6-.1-.8-.3s-.3-.5-.3-.8v-4.2h2.2v-1.4h-2.2zm3.5 8.8v2.2h2.2v-2.2z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <header role="banner" id="header" class="header-bar">
      <div class="container-fixed">
        <div class="header-left">
          <div class="logo-area">
            <div class="logo-area__inner">
              <a href="/en" title="Home" class="header-brandbar-logo">
                <svg id="brand-logo" class="brandbar-logo-magenta"  data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 1000" width="58" height="25"><defs><style>.cls-1{fill:#e20074;}</style></defs>
                  <g id="Telekom_Logo" data-name="Telekom Logo">
                    <path class="cls-1" d="M200,660H0V460H200ZM0,0V340H60V330C60,170,150,70,320,70h10V790c0,100-40,140-140,140H160v70H680V930H650c-100,0-140-40-140-140V70h10c170,0,260,100,260,260v10h60V0ZM640,660H840V460H640Z"/>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <a href="<?php print_unescaped(link_to('', 'index.php')); ?>" id="nextcloud">
            <div>
              <h5>Magenta<span class="logo-title">CLOUD</span></h5>
              <h1 class="hidden-visually">
                <?php p($theme->getName()); ?>
                <?php p(!empty($_['application']) ? $_['application'] : $l->t('Apps')); ?>
              </h1>
            </div>
          </a>

          <ul id="appmenu" <?php if ($_['themingInvertMenu']) { ?>class="inverted" <?php } ?>>
            <?php foreach ($_['navigation'] as $entry) : ?>
              <li data-id="<?php p($entry['id']); ?>" class="hidden" tabindex="-1">
                <a href="<?php print_unescaped($entry['href']); ?>" <?php if ($entry['active']) : ?> class="active" <?php endif; ?> aria-label="<?php p($entry['name']); ?>">
                  <?php p($entry['name']); ?>
                </a>
              </li>
            <?php endforeach; ?>
            <li></li>
          </ul>
        </div>

        <div class="header-right">
          <div class="search-outer">
            <div id="unified-search"></div>
          </div>
          <div id="settings">
            <div id="expand" tabindex="0" role="button" class="menutoggle" aria-label="<?php p($l->t('Settings')); ?>" aria-haspopup="true" aria-controls="expanddiv" aria-expanded="false">
              <div class="settingsdiv">
                <svg class="user-setting-org" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>user_setting</title>
                  <g id="icon/user_file/user/default-copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M8.89999999,16.5 L12,19.6 L15.1,16.5 L17.35,16.5 C19.7,16.5 21.65,18.15 22.05,20.45 L22.05,20.45 L22.25,21.5 L1.79999996,21.5 L1.94999996,20.45 C2.34999996,18.15 4.29999996,16.5 6.64999998,16.5 L6.64999998,16.5 L8.89999999,16.5 Z M12,1.99999996 C15.5,1.99999996 18,4.49999996 18,7.99999996 C18,11.4 15.6,15 12,15 C8.39999998,15 5.99999997,11.4 5.99999997,7.99999996 C5.99999997,4.49999996 8.49999997,1.99999996 12,1.99999996 Z M12,3.49999996 C9.39999999,3.49999996 7.49999998,5.39999997 7.49999998,7.99999996 C7.49999998,10.65 9.29999999,13.5 12,13.5 C14.7,13.5 16.5,10.65 16.5,7.99999996 C16.5,5.39999997 14.6,3.49999996 12,3.49999996 Z" id="Combined-Shape" fill="#191919"></path>
                  </g>
                </svg>
              </div>
              <span class="username-lable">
                <a class="right-menu-font"><?php p($_['user_displayname']); ?></a>
              </span>
            </div>
            <nav class="settings-menu" id="expanddiv" style="display:none;" aria-label="<?php p($l->t('Settings menu')); ?>">
              <ul>
              <?php
                  $arr['Kundencenter'] = array( "id" => "kundencenter",
                  "order" => 8,
                  "href" => 'https://www.telekom.de/mein-kundencenter',
                  "target" =>'_blank',
                  "icon" => "settings/img/Kundencenter.svg",
                  "type" => "Kundencenter",
                  "name" => "Kundencenter",
                  "active" => '',
                  "classes" => '',
                  "unread" => 0);
                 array_splice($_['settingsnavigation'], count($_['settingsnavigation'])-1, 0,$arr);
                ?>
                <?php foreach ($_['settingsnavigation'] as $entry) : ?>
                  <li data-id="<?php p($entry['id']); ?>">
                  <a href="<?php $entry['id'] == "help" ? print_unescaped("https://cloud.telekom-dienste.de/hilfe") : print_unescaped($entry['href']); ?>" <?php if ($entry["active"]) : ?> class="active" <?php endif; ?> target="<?php ($entry['id'] == "help" || $entry['id'] == "kundencenter") ? print_unescaped("_blank") : print_unescaped("_self"); ?>">
                      <?php if ($entry['id'] == "settings") { ?>
                        <img alt="" src="<?php print_unescaped(image_path($_['appid'],'settings/img/admin.svg') . '?v=' . $_['versionHash']); ?>">
                        <?php p($entry['name']); ?>
                      <?php } elseif ($entry['id'] == "help") { ?>
                        <img alt="" src="<?php print_unescaped(image_path($_['appid'],'settings/img/help.svg') . '?v=' . $_['versionHash']); ?>">
                        <?php p($l->t('Help & FAQ')); ?>
                      <?php } elseif ($entry['id'] == "kundencenter") { ?>
                        <img alt="" src="<?php print_unescaped(image_path($_['appid'],'settings/img/Kundencenter.svg') . '?v=' . $_['versionHash']); ?>">
                      <?php p($l->t('Kundencenter')); ?>
                      <?php } elseif ($entry['id'] == "logout") { ?>
                        <img alt="" src="<?php print_unescaped($entry['icon'] . '?v=' . $_['versionHash']); ?>">
                        <?php p($l->t('Logout')); ?>
                      <?php } elseif ($entry['id'] == "core_apps") { ?>
                        <img alt="" src="<?php print_unescaped(image_path($_['appid'],'settings/img/apps.svg') . '?v=' . $_['versionHash']); ?>">
                        <?php p($entry['name']); ?>
                      <?php } elseif ($entry['id'] == "core_users") { ?>
                        <img alt="" src="<?php print_unescaped(image_path($_['appid'],'settings/img/users.svg') . '?v=' . $_['versionHash']); ?>">
                        <?php p($entry['name']); ?>
                      <?php } else { ?>
                        <img alt="" src="<?php print_unescaped($entry['icon'] . '?v=' . $_['versionHash']); ?>">
                      <?php p($entry['name']);
                      } ?>
                    </a>
                  </li>
                <?php endforeach; ?>
              </ul>
            </nav>
          </div>
          <div id="navigation" style="display: none;" aria-label="<?php p($l->t('More apps menu')); ?>">
            <div id="apps">
              <ul>
                <?php foreach ($_['navigation'] as $entry) : ?>
                  <li data-id="<?php p($entry['id']); ?>">
                    <a href="<?php print_unescaped($entry['href']); ?>" <?php if ($entry['active']) : ?> class="active nav-icon-files svg " <?php endif; ?> aria-label="<?php p($entry['name']); ?>">

                      <span><?php p($entry['name']); ?></span>
                    </a>
                  </li>
                <?php endforeach; ?>
              </ul>
            </div>
          </div>
          <div id="more-apps" style="display: none;" class="menutoggle" aria-haspopup="true" aria-controls="navigation" aria-expanded="false">
            <a href="#" aria-label="<?php p($l->t('More apps')); ?>">
              <div class="icon-more-white"></div>
              <span class="right-menu-font"><?php p($l->t('Menu')); ?></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>

  <div id="sudo-login-background" class="hidden"></div>
  <form id="sudo-login-form" class="hidden" method="POST">
    <label>
      <?php p($l->t('This action requires you to confirm your password')); ?><br />
      <input type="password" class="question" autocomplete="new-password" name="question" value=" <?php /* Hack against browsers ignoring autocomplete="off" */ ?>" placeholder="<?php p($l->t('Confirm your password')); ?>" />
    </label>
    <input class="confirm" value="<?php p($l->t('Confirm')); ?>" type="submit">
  </form>

  <div id="content" class="app-<?php p($_['appid']) ?>" role="main">
    <div class="container-fixed">
      <?php print_unescaped($_['content']); ?>
      <div id="app-sidebar"></div>
    </div>

  </div>

  <footer class="brand-footer">
    <div class="container-fixed">
      <div class="row brand-footer-bar">
        <div class="col-l-4 col-s-12 text-muted">
          <div class="brand-footer-bar-text">
            © Telekom Deutschland GmbH
          </div>
        </div>
        <div class="col-l-8 col-s-12">
          <ul class="nav brand-footer-nav text-l-right">
            <li><a href="https://static.magentacloud.de/licences/webui.htm" title="Open Source Lizenzen" target="_blank">Open Source Lizenzen</a>
            <li><a href="http://www.telekom.de/impressum" title="Impressum" target="_blank">Impressum</a></li>
            <li><a href="https://static.magentacloud.de/Datenschutz" title="Datenschutz" target="_blank">Datenschutz</a>
            </li>
            <li><a href="https://cloud.telekom-dienste.de/hilfe" title="HilfeAndFAQ" target="_blank">Hilfe & FAQ</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>
