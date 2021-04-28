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
    <style>
    /* Brand header */
    .brandbar {
        color: #fff;
        background: #e20074;
        overflow: hidden;
        width: 100%;
    }

    .shrink {
        height: 5px;
    }

    /* Brand Footer */

    @media only screen and (min-width: 1200px) .container-fixed {
        .container-fixed {
            max-width: 1140px;
        }
    }

    @media only screen and (min-width: 992px) .container-fixed {
        .container-fixed {
            max-width: 960px;
        }
    }

    @media only screen and (min-width: 768px) .container-fixed {
        .container-fixed {
            max-width: 720px;
        }
    }

    @media only screen and (min-width: 576px) .container-fixed {
        .container-fixed {
            max-width: 540px;
        }
    }

    .container-fixed {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    .brand-footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #262626;
        color: #fff;
        font-size: 16px;
        line-height: 16px;
        padding: 0 12px;
    }

    .brand-footer-bar {
        display: flex;
        padding-top: 18px;
        padding-bottom: 18px;
    }

    .brand-footer-bar-text {
        padding-top: 16px;
        padding-bottom: 16px;
    }

    .brand-footer-nav {
        margin-left: -12px;
        margin-right: -12px;
    }

    .nav {
        list-style: none;
        padding-left: 0;
        margin: 0;
    }

    .text-l-right {
        text-align: right;
    }

    .text-muted {
        color: #918984 !important;
    }

    .brand-footer-nav-muted>li>a,
    .brand-footer-nav-muted>li>a:active,
    .brand-footer-nav-muted>li>a:focus,
    .brand-footer-nav-muted>li>a:hover {
        color: #918984;
    }

    .brand-footer-nav>li {
        display: inline-block;
        padding: 12px;
    }

    ul {
        display: flex;
    }

    .nav>li,
    .nav>li>a {
        position: relative;
        display: block;
    }

    .brand-footer-nav>li>a,
    .brand-footer-nav>li>a:active,
    .brand-footer-nav>li>a:focus,
    .brand-footer-nav>li>a:hover {
        color: #fff;
    }

    .brand-footer-nav>li>a {
        padding: 4px 0 3px;
        border-bottom: 1px solid transparent;
    }

    .nav>li>a {
        padding: 8px 12px 10px;
    }

    .nav>li,
    .nav>li>a {
        position: relative;
        display: block;
    }

    a {
        color: #00739f;
        text-decoration: none;
    }
    </style>
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

    <div class="brandbar">
        <div class="container-fixed">
            <div class="brand-logo">
                <img src="deutsche-telekom-logo.svg" alt="Telekom Logo">
                <span class="sr-only">Telekom Logo</span>
            </div>
            <div class="brand-claim">
                <span class="brand-slogan">LET'S POWER HIGHER PERFORMANCE</span>
                <span class="sr-only">Brand Claim</span>
            </div>
        </div>
    </div>
    <header role="banner" id="header">
        <div class="header-left">
            <a href="<?php print_unescaped(link_to('', 'index.php')); ?>" id="nextcloud">
                <div class="logo logo-icon">
                    <h1 class="hidden-visually">
                        <?php p($theme->getName()); ?>
                        <?php p(!empty($_['application'])?$_['application']: $l->t('Apps')); ?>
                    </h1>
                </div>
            </a>

            <ul id="appmenu" <?php if ($_['themingInvertMenu']) { ?>class="inverted" <?php } ?>>
                <?php foreach ($_['navigation'] as $entry): ?>
                <li data-id="<?php p($entry['id']); ?>" class="hidden" tabindex="-1">
                    <a href="<?php print_unescaped($entry['href']); ?>" <?php if ($entry['active']): ?> class="active"
                        <?php endif; ?> aria-label="<?php p($entry['name']); ?>">
                        <svg width="20" height="20" viewBox="0 0 20 20" alt="">
                            <?php if ($_['themingInvertMenu']) { ?>
                            <defs>
                                <filter id="invertMenuMain-<?php p($entry['id']); ?>">
                                    <feColorMatrix in="SourceGraphic" type="matrix"
                                        values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0" />
                                </filter>
                            </defs>
                            <?php } ?>
                            <image x="0" y="0" width="20" height="20" preserveAspectRatio="xMinYMin meet"
                                <?php if ($_['themingInvertMenu']) { ?>
                                filter="url(#invertMenuMain-<?php p($entry['id']); ?>)" <?php } ?>
                                xlink:href="<?php print_unescaped($entry['icon'] . '?v=' . $_['versionHash']); ?>"
                                class="app-icon"></image>
                        </svg>
                        <span>
                            <?php p($entry['name']); ?>
                        </span>
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
                                <a href="<?php print_unescaped($entry['href']); ?>" <?php if ($entry['active']): ?>
                                    class="active" <?php endif; ?> aria-label="<?php p($entry['name']); ?>">
                                    <svg width="16" height="16" viewBox="0 0 16 16" alt="">
                                        <defs>
                                            <filter id="invertMenuMore-<?php p($entry['id']); ?>">
                                                <feColorMatrix in="SourceGraphic" type="matrix"
                                                    values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"></feColorMatrix>
                                            </filter>
                                        </defs>
                                        <image x="0" y="0" width="16" height="16" preserveAspectRatio="xMinYMin meet"
                                            filter="url(#invertMenuMore-<?php p($entry['id']); ?>)"
                                            xlink:href="<?php print_unescaped($entry['icon'] . '?v=' . $_['versionHash']); ?>"
                                            class="app-icon"></image>
                                    </svg>
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
            <div id="unified-search"></div>
            <div id="notifications"></div>
            <div id="contactsmenu">
                <div class="icon-contacts menutoggle" tabindex="0" role="button" aria-haspopup="true"
                    aria-controls="contactsmenu-menu" aria-expanded="false">
                    <span class="hidden-visually"><?php p($l->t('Contacts'));?></span>
                </div>
                <div id="contactsmenu-menu" class="menu" aria-label="<?php p($l->t('Contacts menu'));?>"></div>
            </div>
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
                                <img alt="" src="<?php print_unescaped($entry['icon'] . '?v=' . $_['versionHash']); ?>">
                                <?php p($entry['name']) ?>
                            </a>
                        </li>
                        <?php endforeach; ?>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

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
        <?php print_unescaped($_['content']); ?>
    </div>

    <footer class="brand-footer">
        <div class="container-fixed">
            <div class="row brand-footer-bar">
                <div class="col-l-4 col-s-12 text-muted text-s-center">
                    <div class="brand-footer-bar-text">
                        © 2021 Deutsche Telekom AG
                    </div>
                </div>
                <div class="col-l-8 col-s-12">
                    <ul class="nav brand-footer-nav brand-footer-nav-muted text-l-right text-s-center">
                        <li><a href="/en/account/register/" title="Switch to english version">English</a></li>
                        <li class="divider"></li>
                        <li><a href="/kontakt/" data-href="/kontakt/?type=78" class="modal-form">Kontakt</a></li>
                        <li><a href="/nutzungsbedingungen/" title="Nutzungsbedingungen">Nutzungsbedingungen</a></li>
                        <li><a href="/impressum/" title="Impressum">Impressum</a></li>
                        <li><a href="/datenschutz/" title="Datenschutz">Datenschutz</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</body>

</html>