<!DOCTYPE html>
<html class="ng-csp" data-placeholder-focus="false" lang="<?php p($_['language']); ?>" data-locale="<?php p($_['locale']); ?>">

<head data-requesttoken="<?php p($_['requesttoken']); ?>">
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
  <meta name="apple-mobile-web-app-title" content="<?php p((!empty($_['application']) && $_['appid'] !== 'files') ? $_['application'] : $theme->getTitle()); ?>">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="theme-color" content="<?php p($theme->getColorPrimary()); ?>">
  <link rel="icon" href="<?php print_unescaped(image_path($_['appid'], 'favicon.ico')); /* IE11+ supports png */ ?>">
  <link rel="apple-touch-icon" href="<?php print_unescaped(image_path($_['appid'], 'favicon-touch.png')); ?>">
  <link rel="apple-touch-icon-precomposed" href="<?php print_unescaped(image_path($_['appid'], 'favicon-touch.png')); ?>">
  <link rel="mask-icon" sizes="any" href="<?php print_unescaped('/themes/nextmagentacloud21/core/img/favicon-mask.svg'); ?>" color="<?php p($theme->getColorPrimary()); ?>">
  <link rel="manifest" href="<?php print_unescaped('/themes/nextmagentacloud21/core/img/manifest.json'); ?>">
  <?php emit_css_loading_tags($_); ?>
  <?php emit_script_loading_tags($_); ?>
  <?php print_unescaped($_['headers']); ?>

</head>

<body id="<?php p($_['bodyid']); ?>">
  <?php include('layout.noscript.warning.php'); ?>
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
            <svg id="brand-logo" viewBox="0 0 73 36" fill="currentColor">
              <g>
                <path d="M0 24v-7h7v7H0zM22 24v-7h7v7h-7zM44 24v-7h7v7h-7zM66 24v-7h7v7h-7z"></path>
                <path d="M12 1.74c-2.94.09-5.56 1.09-7.22 2.98-1.57 1.8-2.55 4.6-2.91 8.32L0 12.71.36 0h28.29L29 12.71l-1.87.33c-.36-3.76-1.34-6.52-2.91-8.32-1.66-1.89-4.28-2.89-7.22-2.98V28.3c0 2.31.57 3.82 1.25 4.51.56.6 1.41.96 2.75 1.08.42.03 1.05.06 2 .06V36H6v-2.04c.95 0 1.58-.03 2-.06 1.34-.12 2.18-.48 2.75-1.08.68-.69 1.25-2.19 1.25-4.51V1.74z">
                </path>
              </g>
            </svg>
          </a>
          <p class="header-brandbar-claim">
            <span>Life is for sharing.</span>
          </p>
        </div>
      </div>
    </div>

    <header role="banner" id="header" class="header-bar">
      <div class="container-fixed">
        <div class="header-left">
          <div class="logo-area">
            <div class="logo-area__inner">
              <a href="/en" title="Home" class="header-brandbar-logo">
                <svg id="brand-logo" class="brandbar-logo-magenta" viewBox="0 0 73 36" fill="currentColor">
                  <g>
                    <path d="M0 24v-7h7v7H0zM22 24v-7h7v7h-7zM44 24v-7h7v7h-7zM66 24v-7h7v7h-7z">
                    </path>
                    <path d="M12 1.74c-2.94.09-5.56 1.09-7.22 2.98-1.57 1.8-2.55 4.6-2.91 8.32L0 12.71.36 0h28.29L29 12.71l-1.87.33c-.36-3.76-1.34-6.52-2.91-8.32-1.66-1.89-4.28-2.89-7.22-2.98V28.3c0 2.31.57 3.82 1.25 4.51.56.6 1.41.96 2.75 1.08.42.03 1.05.06 2 .06V36H6v-2.04c.95 0 1.58-.03 2-.06 1.34-.12 2.18-.48 2.75-1.08.68-.69 1.25-2.19 1.25-4.51V1.74z">
                    </path>
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
            <li id="more-apps" class="menutoggle" aria-haspopup="true" aria-controls="navigation" aria-expanded="false">
              <a href="#" aria-label="<?php p($l->t('More apps')); ?>">
                <div class="icon-more-white"></div>
                <span><?php p($l->t('More')); ?></span>
              </a>
            </li>
          </ul>

          <nav role="navigation">
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
          </nav>


        </div>
        <?php
        /** @var \OCP\AppFramework\Http\Template\PublicTemplateResponse $template */
        if (isset($template) && $template->getActionCount() !== 0) {
          $primary = $template->getPrimaryAction();
          $others = $template->getOtherActions(); ?>
          <div class="header-right">
            <span id="header-primary-action" class="<?php if ($template->getActionCount() === 1) {
                                                      p($primary->getIcon());
                                                    } ?>">
              <a href="<?php p($primary->getLink()); ?>" class="">
                <span class="gust-download-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <title>download</title>
                    <g fill="currentColor">
                      <g>
                        <path fill-rule="evenodd" d="M21.25 20.5c.4 0 .75.35.75.75s-.35.75-.75.75H2.75c-.4 0-.75-.35-.75-.75s.35-.75.75-.75zM12 2c.4 0 .75.35.75.75V9.5h3.85l-4.6 7-4.6-7h3.85V2.75c0-.4.35-.75.75-.75z"></path>
                      </g>
                    </g>
                  </svg>
                </span>
                <span class="gust-download-label"><?php p($primary->getLabel()) ?></span>
              </a>
            </span>
            <?php if ($template->getActionCount() > 1) { ?>
              <div id="header-secondary-action">
                <button id="header-actions-toggle" class="menutoggle icon-more-white"></button>
                <div id="header-actions-menu" class="popovermenu menu">
                  <ul>
                    <?php
                    /** @var \OCP\AppFramework\Http\Template\IMenuAction $action */
                    foreach ($others as $action) {
                      print_unescaped($action->render());
                    }
                    ?>
                  </ul>
                </div>
              </div>
            <?php } ?>
          </div>
        <?php
        } ?>
      </div>
    </header>
  </div>
  <div class="full-width-breadcrumb"></div>


  <div id="content" class="app-<?php p($_['appid']) ?>" role="main">
    <div class="container-fixed">
      <?php print_unescaped($_['content']); ?>
    </div>
  </div>
  <?php if (isset($template) && $template->getFooterVisible()) { ?>

  <?php } ?>

</body>

</html>
