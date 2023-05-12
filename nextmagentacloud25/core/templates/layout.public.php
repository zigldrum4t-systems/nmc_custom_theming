<!DOCTYPE html>
<html class="ng-csp" data-placeholder-focus="false" lang="<?php p($_['language']); ?>" data-locale="<?php p($_['locale']); ?>" translate="no" >
<head data-requesttoken="<?php p($_['requesttoken']); ?>">
	<meta charset="utf-8">
	<title>
		<?php
		p(!empty($_['application'])?$_['application'].' - ':'');
p($theme->getTitle());
?>
	</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
	<?php if ($theme->getiTunesAppId() !== '') { ?>
	<meta name="apple-itunes-app" content="app-id=<?php p($theme->getiTunesAppId()); ?>">
	<?php } ?>
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="<?php p((!empty($_['application']) && $_['appid'] !== 'files')? $_['application']:$theme->getTitle()); ?>">
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="theme-color" content="<?php p($theme->getColorPrimary()); ?>">
	<link rel="icon" href="<?php print_unescaped(image_path($_['appid'], 'favicon.ico')); /* IE11+ supports png */ ?>">
	<link rel="apple-touch-icon" href="<?php print_unescaped(image_path($_['appid'], 'favicon-touch.png')); ?>">
	<link rel="apple-touch-icon-precomposed" href="<?php print_unescaped(image_path($_['appid'], 'favicon-touch.png')); ?>">
	<link rel="mask-icon" sizes="any" href="<?php print_unescaped(image_path($_['appid'], 'favicon-mask.svg')); ?>" color="<?php p($theme->getColorPrimary()); ?>">
	<link rel="manifest" href="<?php print_unescaped(image_path($_['appid'], 'manifest.json')); ?>">
	<?php emit_css_loading_tags($_); ?>
	<?php emit_script_loading_tags($_); ?>
	<?php print_unescaped($_['headers']); ?>
</head>
<body id="<?php p($_['bodyid']);?>">
<?php include('layout.noscript.warning.php'); ?>
<?php foreach ($_['initialStates'] as $app => $initialState) { ?>
	<input type="hidden" id="initial-state-<?php p($app); ?>" value="<?php p(base64_encode($initialState)); ?>">
<?php }?>
	<div id="skip-actions">
		<?php if ($_['id-app-content'] !== null) { ?><a href="<?php p($_['id-app-content']); ?>" class="button primary skip-navigation skip-content"><?php p($l->t('Skip to main content')); ?></a><?php } ?>
		<?php if ($_['id-app-navigation'] !== null) { ?><a href="<?php p($_['id-app-navigation']); ?>" class="button primary skip-navigation"><?php p($l->t('Skip to navigation of app')); ?></a><?php } ?>
	</div>

	<header id="header">
		<div class="header-left">
			<!-- <div class="logo logo-icon svg"></div> -->
			<div class="brand-bar-logo">
			<svg id="brand-logo" viewBox="0 0 153 38" width="153" height="38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor">
              <g fill="#fff">
                <path d="m7.6 25.1h-7.6v-7.6h7.6zm-7.6-25.1v12.9h2.3v-.4c0-6.1 3.4-9.9 9.9-9.9h.4v27.4c0 3.8-1.5 5.3-5.3 5.3h-1.2v2.7h19.8v-2.7h-1.1c-3.8 0-5.3-1.5-5.3-5.3v-27.3h.4c6.5 0 9.9 3.8 9.9 9.9v.4h2.3v-13zm24.3 25.1h7.6v-7.6h-7.6z"></path>
                <path d="m61.2 16.3h-6.5v-11.4h6.5v1.6h-4.7v3.1h4.5v1.6h-4.5v3.4h4.7zm5.6-6.6h.6v-1.5c-.1-.1-.3-.1-.6-.1-.4 0-.8.1-1.2.3s-.6.5-.8.9h-.1v-1.1h-1.6v8.1h1.7v-4.5c0-.5.1-.9.2-1.2s.4-.5.7-.7c.3-.1.7-.2 1.1-.2zm3.9 6.8c.3 0 .7-.1 1-.2v-1.3c-.2 0-.4 0-.6 0s-.3-.1-.4-.2-.1-.3-.1-.5v-9.4h-1.7v9.7c0 .6.2 1.1.5 1.4s.7.5 1.3.5zm2.4-1.9c-.3-.7-.4-1.4-.4-2.3s.1-1.7.4-2.3.7-1.1 1.2-1.5c.5-.3 1.2-.5 1.9-.5s1.3.2 1.8.5.9.8 1.2 1.4.4 1.3.4 2.2v.3.3h-5.3c0 .8.2 1.4.5 1.8.3.5.8.7 1.4.7.4 0 .8-.1 1-.3.3-.2.5-.4.6-.8h1.7c-.2.8-.6 1.4-1.2 1.8s-1.3.6-2.2.6c-.7 0-1.3-.2-1.9-.5-.4-.3-.8-.8-1.1-1.4zm1.6-4.5c-.2.3-.4.7-.4 1.3h3.7c-.1-.6-.2-1-.4-1.3-.3-.4-.8-.6-1.4-.6-.6-.1-1.1.2-1.5.6zm9.3 6.1c-.4-.3-.7-.6-.9-1.1h-.1v1.2h-1.6v-11.4h1.6v4.3h.1c.2-.4.6-.7.9-.9.5-.2.9-.3 1.4-.3.7 0 1.2.2 1.7.5s.8.8 1.1 1.5c.2.6.4 1.4.4 2.3s-.1 1.6-.4 2.3c-.2.6-.6 1.1-1.1 1.5-.5.3-1 .5-1.7.5-.5 0-1-.1-1.4-.4zm1-1.2c.6 0 1.1-.2 1.4-.7s.5-1.2.5-2.1-.2-1.6-.5-2c-.3-.5-.8-.7-1.4-.7s-1.1.2-1.4.7-.5 1.2-.5 2c0 .9.2 1.6.5 2 .2.6.7.8 1.4.8zm8.4 1.6c-.7 0-1.3-.2-1.9-.5-.5-.3-.9-.8-1.2-1.5s-.4-1.4-.4-2.3.1-1.7.4-2.3.7-1.1 1.2-1.5c.6-.3 1.2-.5 1.9-.5s1.3.2 1.8.5.9.8 1.2 1.4.4 1.3.4 2.2v.3.3h-5.3c0 .8.2 1.4.5 1.8.3.5.8.7 1.4.7.4 0 .8-.1 1-.3.3-.2.5-.4.6-.8h1.7c-.2.8-.6 1.4-1.2 1.8-.5.5-1.3.7-2.1.7zm-1.4-6.5c-.2.3-.4.7-.4 1.3h3.7c-.1-.6-.2-1-.4-1.3-.3-.4-.8-.6-1.4-.6-.7-.1-1.2.2-1.5.6zm10.5-2.1c-.5 0-1 .1-1.4.3s-.7.6-.9 1h-.1v-1.1h-1.6v8.1h1.7v-4.6c0-.7.2-1.2.5-1.6s.7-.6 1.3-.6c.5 0 .8.1 1 .4s.3.7.3 1.2v5.2h1.7v-5.3c0-1-.2-1.7-.6-2.2-.4-.6-1-.8-1.9-.8zm6.2 10.3c.3-.5.5-1.1.5-2.1v-2.1h-2.2v2.2h1.1v.1c0 .4 0 .7-.1.9s-.2.4-.3.5c-.2.1-.4.2-.6.2v1c.7 0 1.2-.2 1.6-.7zm-46.9 12.1h-.1l-1.4-5.5h-1.8l-1.5 5.5h-.1l-1.5-5.5h-1.7l2.3 8.1h1.7l1.5-5.4h.1l1.5 5.4h1.7l2.3-8.1h-1.7zm10.6 1.4c.1 0 .3 0 .4-.1v1.3c-.1.1-.3.1-.4.1-.2 0-.3.1-.5.1-.4 0-.8-.1-1-.3s-.4-.4-.4-.8h-.1c-.2.4-.6.7-.9.9-.4.2-.9.3-1.4.3-.8 0-1.4-.2-1.8-.6s-.6-1-.6-1.7c0-.9.4-1.6 1.1-2.1s1.8-.7 3.1-.7h.5v-.4c0-.5-.1-.9-.3-1.2s-.6-.4-1.1-.4c-.4 0-.7.1-.9.3s-.4.5-.4.8h-1.6c.1-.8.4-1.4.9-1.8s1.2-.6 2.1-.6c1 0 1.8.3 2.3.8.5.6.8 1.3.8 2.2v3.5c0 .2 0 .3.1.4-.1-.1 0 0 .1 0zm-2.3-1c.2-.3.2-.7.2-1.1v-.4h-.5c-.8 0-1.5.1-1.9.4-.4.2-.6.6-.6 1.1 0 .4.1.7.3.9s.5.3.9.3.7-.1 1-.3c.2-.3.4-.6.6-.9zm7.4-2.4-1-.3c-.3-.1-.6-.2-.7-.4-.2-.2-.2-.4-.2-.6 0-.3.1-.6.3-.7.2-.2.5-.3.9-.3.3 0 .6.1.8.3s.3.5.4.8h1.6c-.1-.8-.4-1.4-.9-1.8s-1.2-.7-2-.7c-.6 0-1.1.1-1.5.3s-.8.5-1 .9-.4.8-.4 1.2c0 .7.2 1.2.5 1.6s.8.6 1.4.8l1 .3c.4.1.6.2.8.4s.3.4.3.7-.1.6-.3.8-.5.3-.9.3-.7-.1-.9-.3-.4-.4-.5-.8h-1.6c.1.8.4 1.4.9 1.8s1.2.6 2.1.6 1.6-.2 2.1-.7.8-1.1.8-1.8c0-.6-.2-1.1-.5-1.5s-.8-.7-1.5-.9zm9.9 2.3h-.1l-1.8-5.7h-1.8l2.8 8.1h1.8l2.8-8.1h-1.8zm10.9-4.1c.3.6.4 1.3.4 2.2v.3.3h-5.3c0 .8.2 1.4.5 1.8.3.5.8.7 1.4.7.4 0 .8-.1 1-.3.3-.2.5-.4.6-.8h1.7c-.2.8-.6 1.4-1.2 1.8s-1.3.6-2.2.6c-.7 0-1.3-.2-1.9-.5-.5-.3-.9-.8-1.2-1.5s-.4-1.4-.4-2.3.1-1.7.4-2.3.7-1.1 1.2-1.5c.5-.3 1.2-.5 1.9-.5s1.3.2 1.8.5c.7.4 1.1.9 1.3 1.5zm-4.4.2c-.2.3-.4.7-.4 1.3h3.7c-.1-.6-.2-1-.4-1.3-.3-.4-.8-.6-1.4-.6-.7-.1-1.2.2-1.5.6zm9.1-1.7c-.4.2-.6.5-.8.9h-.1v-1.1h-1.6v8.1h1.7v-4.5c0-.5.1-.9.2-1.2s.4-.5.7-.7.7-.2 1.1-.2h.6v-1.5c-.1-.1-.3-.1-.6-.1-.4 0-.8.1-1.2.3zm10 1.6c.2.6.4 1.4.4 2.3s-.1 1.6-.4 2.3c-.2.6-.6 1.1-1.1 1.5-.5.3-1 .5-1.7.5-.5 0-1-.1-1.4-.4s-.7-.6-.9-1.1h-.1v1.2h-1.6v-11.3h1.7v4.3h.1c.2-.4.6-.7.9-.9.4-.2.8-.3 1.3-.3.7 0 1.2.2 1.7.5s.9.8 1.1 1.4zm-1.3 2.3c0-.9-.2-1.6-.5-2-.3-.5-.8-.7-1.4-.7s-1.1.2-1.4.7-.5 1.2-.5 2c0 .9.2 1.6.5 2 .3.5.8.7 1.4.7s1.1-.2 1.4-.7c.3-.4.5-1.1.5-2zm3.5-5.5h1.7v-1.8h-1.7zm0 9.6h1.7v-8.1h-1.7zm7.8-8.4c-.5 0-1 .1-1.4.3s-.7.6-.9 1h-.1v-1.1h-1.6v8.1h1.7v-4.6c0-.7.2-1.2.5-1.6s.7-.6 1.3-.6c.5 0 .8.1 1 .4s.3.7.3 1.2v5.2h1.7v-5.4c0-1-.2-1.7-.6-2.2-.4-.4-1.1-.7-1.9-.7zm9.7-3h1.7v11.4h-1.6v-1.2h-.1c-.2.4-.5.8-.9 1.1s-.9.4-1.4.4c-.7 0-1.2-.2-1.7-.5s-.8-.8-1.1-1.5c-.2-.6-.4-1.4-.4-2.3s.1-1.7.4-2.3c.2-.6.6-1.1 1.1-1.5.5-.3 1.1-.5 1.7-.5.5 0 1 .1 1.3.3.4.2.7.5.9.9h.1zm0 7.3c0-.9-.2-1.6-.5-2-.3-.5-.8-.7-1.4-.7s-1.1.2-1.5.7c-.3.5-.5 1.2-.5 2 0 .9.2 1.6.5 2 .3.5.8.7 1.5.7.6 0 1.1-.2 1.4-.7.4-.4.5-1.1.5-2zm10-2.4c.3.6.4 1.3.4 2.2v.3.3h-5.3c0 .8.2 1.4.5 1.8.3.5.8.7 1.4.7.4 0 .8-.1 1-.3.3-.2.5-.4.6-.8h1.7c-.2.8-.6 1.4-1.2 1.8s-1.3.6-2.2.6c-.7 0-1.3-.2-1.9-.5-.5-.3-.9-.8-1.2-1.5s-.4-1.4-.4-2.3.1-1.7.4-2.3.7-1.1 1.2-1.5c.5-.3 1.2-.5 1.9-.5s1.3.2 1.8.5c.6.4 1 .9 1.3 1.5zm-4.4.2c-.2.3-.4.7-.4 1.3h3.7c-.1-.6-.2-1-.4-1.3-.3-.4-.8-.6-1.4-.6-.7-.1-1.2.2-1.5.6zm8.8-4.7h-.3l-1.3 1.3v1.5h-1.5v1.4h1.5v4.5c0 .8.2 1.3.6 1.7s1 .6 1.6.6 1.1-.1 1.5-.3v-1.3c-.3.1-.7.1-1 .2-.3 0-.6-.1-.8-.3s-.3-.5-.3-.8v-4.2h2.2v-1.4h-2.2zm3.5 8.8v2.2h2.2v-2.2z"></path>
              </g>
            </svg>
		</div>
			<span id="nextcloud" class="header-appname">
				<?php if (isset($template) && $template->getHeaderTitle() !== '') { ?>
					<?php p($template->getHeaderTitle()); ?>
				<?php } else { ?>
					<?php	p($theme->getName()); ?>
				<?php } ?>
			</span>
			<?php if (isset($template) && $template->getHeaderDetails() !== '') { ?>
				<div class="header-shared-by">
					<?php p($template->getHeaderDetails()); ?>
				</div>
			<?php } ?>
		</div>

		<div class="header-right">
		<?php
/** @var \OCP\AppFramework\Http\Template\PublicTemplateResponse $template */
if (isset($template) && $template->getActionCount() !== 0) {
	$primary = $template->getPrimaryAction();
	$others = $template->getOtherActions(); ?>
			<span id="header-primary-action" class="<?php if ($template->getActionCount() === 1) {
				p($primary->getIcon());
			} ?>">
				<a href="<?php p($primary->getLink()); ?>" class="primary button">
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
		<?php
} ?>
		</div>
	</header>
	<main id="content" class="app-<?php p($_['appid']) ?>">
		<h1 class="hidden-visually">
			<?php if (isset($template) && $template->getHeaderTitle() !== '') { ?>
				<?php p($template->getHeaderTitle()); ?>
			<?php } else { ?>
				<?php	p($theme->getName()); ?>
			<?php } ?>
		</h1>
		<?php print_unescaped($_['content']); ?>
	</main>
	<?php if (isset($template) && $template->getFooterVisible()) { ?>
	<footer>
		<p><?php print_unescaped($theme->getLongFooter()); ?></p>
		<?php
if ($_['showSimpleSignUpLink']) {
	?>
			<p>
				<a href="https://nextcloud.com/signup/" target="_blank" rel="noreferrer noopener">
					<?php p($l->t('Get your own free account')); ?>
				</a>
			</p>
			<?php
}
		?>
	</footer>
	<?php } ?>

</body>
</html>
