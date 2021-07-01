<!DOCTYPE html>
<html class="ng-csp" data-placeholder-focus="false" lang="<?php p($_['language']); ?>"
    data-locale="<?php p($_['locale']); ?>">

<head data-user="<?php p($_['user_uid']); ?>" data-user-displayname="<?php p($_['user_displayname']); ?>"
    data-requesttoken="<?php p($_['requesttoken']); ?>">

    <meta charset="utf-8">

    <title>
        <?php
				p(!empty($_['application'])?$_['application'].' - ':'');
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
    <meta name="apple-mobile-web-app-title"
        content="<?php p((!empty($_['application']) && $_['appid'] != 'files')? $_['application']:$theme->getTitle()); ?>">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="theme-color" content="<?php p($theme->getColorPrimary()); ?>">
    <link rel="icon" href="<?php print_unescaped(image_path($_['appid'], 'favicon.ico')); /* IE11+ supports png */ ?>">
    <link rel="apple-touch-icon" href="<?php print_unescaped(image_path($_['appid'], 'favicon-touch.png')); ?>">
    <link rel="apple-touch-icon-precomposed"
        href="<?php print_unescaped(image_path($_['appid'], 'favicon-touch.png')); ?>">
    <link rel="mask-icon" sizes="any" href="<?php print_unescaped(image_path($_['appid'], 'favicon-mask.svg')); ?>"
        color="<?php p($theme->getColorPrimary()); ?>">
    <link rel="manifest" href="<?php print_unescaped(image_path($_['appid'], 'manifest.json')); ?>">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <?php emit_css_loading_tags($_); ?>
    <?php emit_script_loading_tags($_); ?>
    <?php print_unescaped($_['headers']); ?>
</head>


<body id="<?php p($_['bodyid']);?>">
    <?php include 'layout.noscript.warning.php'; ?>

    <?php foreach ($_['initialStates'] as $app => $initialState) { ?>
    <input type="hidden" id="initial-state-<?php p($app); ?>" value="<?php p(base64_encode($initialState)); ?>">
    <?php }?>

    <a href="#app-content"
        class="button primary skip-navigation skip-content"><?php p($l->t('Skip to main content')); ?></a>
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
                                <path
                                    d="M12 1.74c-2.94.09-5.56 1.09-7.22 2.98-1.57 1.8-2.55 4.6-2.91 8.32L0 12.71.36 0h28.29L29 12.71l-1.87.33c-.36-3.76-1.34-6.52-2.91-8.32-1.66-1.89-4.28-2.89-7.22-2.98V28.3c0 2.31.57 3.82 1.25 4.51.56.6 1.41.96 2.75 1.08.42.03 1.05.06 2 .06V36H6v-2.04c.95 0 1.58-.03 2-.06 1.34-.12 2.18-.48 2.75-1.08.68-.69 1.25-2.19 1.25-4.51V1.74z">
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
                                <svg id="brand-logo" class="brandbar-logo-magenta" viewBox="0 0 73 36"
                                    fill="currentColor">
                                    <g>
                                        <path d="M0 24v-7h7v7H0zM22 24v-7h7v7h-7zM44 24v-7h7v7h-7zM66 24v-7h7v7h-7z">
                                        </path>
                                        <path
                                            d="M12 1.74c-2.94.09-5.56 1.09-7.22 2.98-1.57 1.8-2.55 4.6-2.91 8.32L0 12.71.36 0h28.29L29 12.71l-1.87.33c-.36-3.76-1.34-6.52-2.91-8.32-1.66-1.89-4.28-2.89-7.22-2.98V28.3c0 2.31.57 3.82 1.25 4.51.56.6 1.41.96 2.75 1.08.42.03 1.05.06 2 .06V36H6v-2.04c.95 0 1.58-.03 2-.06 1.34-.12 2.18-.48 2.75-1.08.68-.69 1.25-2.19 1.25-4.51V1.74z">
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
                                <?php p(!empty($_['application'])?$_['application']: $l->t('Apps')); ?>
                            </h1>
                        </div>
                    </a>

                    <ul id="appmenu" <?php if ($_['themingInvertMenu']) { ?>class="inverted" <?php } ?>>
                        <?php foreach ($_['navigation'] as $entry): ?>
                        <li data-id="<?php p($entry['id']); ?>" class="hidden" tabindex="-1">
                            <a href="<?php print_unescaped($entry['href']); ?>" <?php if ($entry['active']): ?>
                                class="active" <?php endif; ?> aria-label="<?php p($entry['name']); ?>">
                                <?php p($entry['name']); ?>
                            </a>
                        </li>
                        <?php endforeach; ?>
                        <li id="more-apps" class="menutoggle" aria-haspopup="true" aria-controls="navigation"
                            aria-expanded="false">
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
                                    <?php foreach ($_['navigation'] as $entry): ?>
                                    <li data-id="<?php p($entry['id']); ?>">
                                        <a href="<?php print_unescaped($entry['href']); ?>"
                                            <?php if ($entry['active']): ?> class="active nav-icon-files svg "
                                            <?php endif; ?> aria-label="<?php p($entry['name']); ?>">

                                            <span><?php p($entry['name']); ?></span>
                                        </a>
                                    </li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div class="header-right">
                    <div id="unified-search"><label>Search</label></div>
                    <div id="contactsmenu">
                        <div class="icon-contacts menutoggle" tabindex="0" role="button" aria-haspopup="true"
                            aria-controls="contactsmenu-menu" aria-expanded="false">
                            <span class="hidden-visually"><?php p($l->t('Contacts'));?></span>
                        </div>
                        <div id="contactsmenu-menu" class="menu" aria-label="<?php p($l->t('Contacts menu'));?>"></div>
                    </div>
                    <label>Mail</label>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" height="16"
                            width="16">
                            <path d="m8 1l-8 8h3v6h10v-6h3l-3-3v-4h-3v1l-2-2z" />
                        </svg><label><?php p($_['user_uid']); ?></label></a>
                    <div id="settings">
                        <div id="expand" tabindex="0" role="button" class="menutoggle"
                            aria-label="<?php p($l->t('Settings'));?>" aria-haspopup="true" aria-controls="expanddiv"
                            aria-expanded="false">
                            <div class="avatardiv<?php if ($_['userAvatarSet']) {
				print_unescaped(' avatardiv-shown');
			} else {
				print_unescaped('" style="display: none');
			} ?>">
                                <?php if ($_['userAvatarSet']): ?>
                                <img alt="" width="32" height="32"
                                    src="<?php p(\OC::$server->getURLGenerator()->linkToRoute('core.avatar.getAvatar', ['userId' => $_['user_uid'], 'size' => 32, 'v' => $_['userAvatarVersion']]));?>"
                                    srcset="<?php p(\OC::$server->getURLGenerator()->linkToRoute('core.avatar.getAvatar', ['userId' => $_['user_uid'], 'size' => 64, 'v' => $_['userAvatarVersion']]));?> 2x, <?php p(\OC::$server->getURLGenerator()->linkToRoute('core.avatar.getAvatar', ['userId' => $_['user_uid'], 'size' => 128, 'v' => $_['userAvatarVersion']]));?> 4x">
                                <?php endif; ?>
                            </div>
                            <div id="expandDisplayName" class="icon-settings-white"></div>
                        </div>
                        <nav class="settings-menu" id="expanddiv" style="display:none;"
                            aria-label="<?php p($l->t('Settings menu'));?>">
                            <ul>
                                <?php foreach ($_['settingsnavigation'] as $entry):?>
                                <li data-id="<?php p($entry['id']); ?>">
                                    <a href="<?php print_unescaped($entry['href']); ?>" <?php if ($entry["active"]): ?>
                                        class="active" <?php endif; ?>>
                                        <img alt=""
                                            src="<?php print_unescaped($entry['icon'] . '?v=' . $_['versionHash']); ?>">
                                        <?php p($entry['name']) ?>
                                    </a>
                                </li>
                                <?php endforeach; ?>
                            </ul>
                        </nav>
                    </div>
                    <div class="menusidenav">
                        <img alt="" src="/apps/settings/img/admin.svg?v=60c496a4">
                        <div class="menusidenavcolapsed" style="display:none;">
                            <ul id="menusidenavul">
                                <?php foreach ($_['navigation'] as $entry): ?>
                                <li data-id="<?php p($entry['id']); ?>" class="hidden" tabindex="-1">
                                    <a href="<?php print_unescaped($entry['href']); ?>" <?php if ($entry['active']): ?>
                                        class="active" <?php endif; ?> aria-label="<?php p($entry['name']); ?>">
                                        <?php p($entry['name']); ?>
                                    </a>
                                </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
    <div class="breadcrumb-bar">
        <div class="container-fixed">
            <div class="col-xs-3 left-part"></div>
            <div class="col-xs-9 right-part">
                <ul class="breadcrumb-style">
                    <li><a><svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" height="16"
                                width="16">
                                <path d="m8 1l-8 8h3v6h10v-6h3l-3-3v-4h-3v1l-2-2z" />
                            </svg></a></li>
                    <li> > </li>
                    <li><a href="#">Dokumente</a></li>
                    <li> > </li>
                    <li><a href="#">Scans</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div id="sudo-login-background" class="hidden"></div>
    <form id="sudo-login-form" class="hidden" method="POST">
        <label>
            <?php p($l->t('This action requires you to confirm your password')); ?><br />
            <input type="password" class="question" autocomplete="new-password" name="question"
                value=" <?php /* Hack against browsers ignoring autocomplete="off" */ ?>"
                placeholder="<?php p($l->t('Confirm your password')); ?>" />
        </label>
        <input class="confirm" value="<?php p($l->t('Confirm')); ?>" type="submit">
    </form>

    <div id="content" class="app-<?php p($_['appid']) ?>" role="main">
        <div class="container-fixed">
            <?php print_unescaped($_['content']); ?>
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
                        <li><a href="http://www.telekom.de/impressum" title="Impressum">Impressum</a></li>
                        <li><a href="https://static.magentacloud.de/Datenschutz" title="Datenschutz">Datenschutz</a>
                        </li>
                        <li><a href="https://cloud.telekom-dienste.de/hilfe" title="HilfeAndFAQ">Hilfe & FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</body>

</html>