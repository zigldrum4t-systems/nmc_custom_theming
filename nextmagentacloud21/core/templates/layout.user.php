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

    <?php emit_css_loading_tags($_); ?>
    <?php emit_script_loading_tags($_); ?>
    <?php print_unescaped($_['headers']); ?>
    <!-- <script nonce="<?php p(\OC::$server->getContentSecurityPolicyNonceManager()->getNonce()) ?>" defer src="/themes/magenta-simple/core/js/custom.js"></script> -->
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
                       <li></li>
                     </ul>
                </div>

                <div class="header-right">
                    <div  class="search-outer">
                    <div id="unified-search"></div>
                    </div>
                    <div id="contactsmenu">
                        <div class="menutoggle" tabindex="0" role="button" aria-haspopup="true"
                            aria-controls="contactsmenu-menu" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>email</title><g fill="#191919"><g><path d="M.5 3.5v14c0 1.65 1.35 3 3 3h17c1.65 0 3-1.35 3-3v-14zM22 5v.95l-8.45 7.25c-.9.75-2.2.75-3.1 0L2 5.95V5zm-1.5 14h-17c-.85 0-1.5-.65-1.5-1.5V7.95l7.45 6.4c.75.65 1.65.95 2.55.95s1.8-.3 2.55-.95L22 7.95v9.55c0 .85-.65 1.5-1.5 1.5z" fill-rule="evenodd"></path></g></g></svg>
                        </div>
                        <div class="emailmenu"><label class="email-menu-text"><a class="right-menu-font"><?php p($l->t('Email'));?></a></label></div>
                    </div>

                    <div id="settings">
                        <div id="expand" tabindex="0" role="button" class="menutoggle"
                            aria-label="<?php p($l->t('Settings'));?>" aria-haspopup="true" aria-controls="expanddiv"
                            aria-expanded="false">
                            <div class="settingsdiv">
                                <svg class="user-setting-org" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <title>user_setting</title>
                                    <g id="icon/user_file/user/default-copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                     <path d="M8.89999999,16.5 L12,19.6 L15.1,16.5 L17.35,16.5 C19.7,16.5 21.65,18.15 22.05,20.45 L22.05,20.45 L22.25,21.5 L1.79999996,21.5 L1.94999996,20.45 C2.34999996,18.15 4.29999996,16.5 6.64999998,16.5 L6.64999998,16.5 L8.89999999,16.5 Z M12,1.99999996 C15.5,1.99999996 18,4.49999996 18,7.99999996 C18,11.4 15.6,15 12,15 C8.39999998,15 5.99999997,11.4 5.99999997,7.99999996 C5.99999997,4.49999996 8.49999997,1.99999996 12,1.99999996 Z M12,3.49999996 C9.39999999,3.49999996 7.49999998,5.39999997 7.49999998,7.99999996 C7.49999998,10.65 9.29999999,13.5 12,13.5 C14.7,13.5 16.5,10.65 16.5,7.99999996 C16.5,5.39999997 14.6,3.49999996 12,3.49999996 Z" id="Combined-Shape" fill="#191919"></path>
                                    </g>
                                </svg>
                            </div>
                            <span class="username-lable">
                                <a class="right-menu-font"><?php p($_['user_uid']); ?></a>
                            </span>
                        </div>
                        <nav class="settings-menu" id="expanddiv" style="display:none;" aria-label="<?php p($l->t('Settings menu'));?>">
<ul>
    <?php foreach ($_['settingsnavigation'] as $entry):?>
    <li data-id="<?php p($entry['id']); ?>">
    <a href="<?php $entry['id']=="help"?print_unescaped("https://cloud.telekom-dienste.de/hilfe"):print_unescaped($entry['href']); ?>" <?php if ($entry["active"]): ?>
        class="active" <?php endif; ?>>
        <?php if($entry['id']=="settings") {?>
            <img alt="" src="<?php print_unescaped('/themes/nextmagentacloud21/core/img/settings/img/admin.svg'. '?v=' . $_['versionHash']); ?>">
        <?php p($entry['name']);?>
        <?php } elseif($entry['id']=="help") {?>
        <img alt="" src="<?php print_unescaped('/themes/nextmagentacloud21/core/img/settings/img/help.svg'. '?v=' . $_['versionHash']); ?>">
        <?php  p($l->t('Help & FAQ'));?>
        <?php } elseif($entry['id']=="logout") {?>
        <img alt="" src="<?php print_unescaped($entry['icon']. '?v=' . $_['versionHash']); ?>">
        <?php  p($l->t('Logout')); ?>
        <?php } elseif($entry['id']=="core_apps") {?>
            <img alt="" src="<?php print_unescaped('/themes/nextmagentacloud21/core/img/settings/img/apps.svg'. '?v=' . $_['versionHash']); ?>">
            <?php p($entry['name']);?>
        <?php } elseif($entry['id']=="core_users") {?>
            <img alt="" src="<?php print_unescaped('/themes/nextmagentacloud21/core/img/settings/img/users.svg'. '?v=' . $_['versionHash']); ?>">
            <?php p($entry['name']);?>
        <?php } else { ?>
        <img alt="" src="<?php print_unescaped($entry['icon'] . '?v=' . $_['versionHash']);?>">
        <?php p($entry['name']);
        }?>
    </a>
    </li>
    <?php endforeach; ?>
</ul>
                        </nav>
                    </div>
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
                    <div id="more-apps" style="display: none;" class="menutoggle" aria-haspopup="true" aria-controls="navigation"
                            aria-expanded="false">
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
            <input type="password" class="question" autocomplete="new-password" name="question"
                value=" <?php /* Hack against browsers ignoring autocomplete="off" */ ?>"
                placeholder="<?php p($l->t('Confirm your password')); ?>" />
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
