<?php
script(\OCA\Files\AppInfo\Application::APP_ID, 'dist/files-app-settings');
?>
<div id="controls">
    <div class="actions creatable hidden">
        <div id="uploadprogresswrapper">
        </div>
    </div>
    <div id="file_action_panel"></div>
    <div class="notCreatable notPublic hidden">
        <?php p($l->t('You don’t have permission to upload or create files here'))?>
    </div>
    <?php /* Note: the template attributes are here only for the public page. These are normally loaded
			 through ajax instead (updateStorageStatistics).
	*/ ?>
    <input type="hidden" name="permissions" value="" id="permissions">
    <input type="hidden" id="free_space" value="<?php isset($_['freeSpace']) ? p($_['freeSpace']) : '' ?>">
    <?php if (isset($_['dirToken'])):?>
    <input type="hidden" id="publicUploadRequestToken" name="requesttoken" value="<?php p($_['requesttoken']) ?>" />
    <input type="hidden" id="dirToken" name="dirToken" value="<?php p($_['dirToken']) ?>" />
    <?php endif;?>
    <input type="hidden" class="max_human_file_size"
        value="(max <?php isset($_['uploadMaxHumanFilesize']) ? p($_['uploadMaxHumanFilesize']) : ''; ?>)">
</div>
<div id="app-navigation">
    <ul class="with-icon">
        <?php

		$customNavigationItems['favorites'] = $_['navigationItems']['favorites'];
		$customNavigationItems['files'] = $_['navigationItems']['files'];

		$customNavigationItems['sharingout'] = $_['navigationItems']['shareoverview']['sublist'][0];
		$customNavigationItems['sharingout']['name']='My shares';

		$customNavigationItems['sharingin'] = $_['navigationItems']['shareoverview']['sublist'][1];
		$customNavigationItems['sharingin']['name']='Shared with me';

		 $customNavigationItems['trashbin'] = $_['navigationItems']['trashbin'];
		 $pinned = 0;

		 foreach ($customNavigationItems as $item) {
			$pinned = NavigationListElements($item, $l, $pinned);
		 }		
	?>

    </ul>

    <div class="Memory-consumed pinned <?php p($pinned === 0 ? 'first-pinned ' : '') ?>"
        title="<?php p($l->t('%s%% of %s used', [$_['usage_relative'], $_['total_space']])); ?>">
        <div class="left-logo"><img
                src='<?php print_unescaped(image_path('mya\OCA\Files\AppInfo\Application::APP_IDpp', 'CloudPink.png')); ?>'>
        </div>
        <div class="logo-right-text">
            <span class="avlspace"><?php p($l->t('%1$s', [$_['usage']])); ?></span><span class="outoftext">
                <?php p($l->t('out of')); ?></span><span
                class="totalspace"><?php p($l->t('%1$s', [$_['total_space']])); ?></span>
        </div>
    </div>

    <div class="NextCloudPorgressBar"
        title="<?php p($l->t('%s%% of %s used', [$_['usage_relative'], $_['total_space']])); ?>">
        <div class="progress customprogressbar">
            <div class="progress-bar styledbar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                aria-valuemax="100" style="width: <?php p($_['usage_relative']); ?>%;">
                <span class="sr-only"><?php p($_['usage_relative']); ?>% Complete</span>
            </div>
        </div>

        <span class="memory-ocup-message" data-extr="<?php echo $_['usage_relative']; ?>">
            <?php p($l->t('Memory occupied by %s%%', [$_['usage_relative']])); ?>
        </span>

    </div>
    <div class="custom-button">
        <a href="https://cloud.telekom-dienste.de/tarife" target="_blank"><button type="button"
                class="btn btn-default btn-style">Expand Storage</button></a>
    </div>
    <div id="app-settings">
        <div id="app-settings-header">
            <button class="settings-button" data-apps-slide-toggle="#app-settings-content">
                <?php p($l->t('Settings')); ?>
            </button>
        </div>
        <div id="app-settings-content">
            <div id="files-app-settings"></div>
            <div id="files-setting-showhidden">
                <input class="checkbox" id="showhiddenfilesToggle" checked="checked" type="checkbox">
                <label for="showhiddenfilesToggle"><?php p($l->t('Show hidden files')); ?></label>
            </div>
            <div id="files-setting-cropimagepreviews">
                <input class="checkbox" id="cropimagepreviewsToggle" checked="checked" type="checkbox">
                <label for="cropimagepreviewsToggle"><?php p($l->t('Full screen for image preview')); ?></label>
            </div>

        </div>
    </div>

</div>

<?php

/**
 * Prints the HTML for a single Entry.
 *
 * @param $item The item to be added
 * @param $l Translator
 * @param $pinned IntegerValue to count the pinned entries at the bottom
 *
 * @return int Returns the pinned value
 */
function NavigationListElements($item, $l, $pinned) {
	strpos($item['classes'] ?? '', 'pinned') !== false ? $pinned++ : ''; ?>
<li data-id="<?php p($item['id']) ?>" <?php if (isset($item['dir'])) { ?> data-dir="<?php p($item['dir']); ?>"
    <?php } ?> <?php if (isset($item['view'])) { ?> data-view="<?php p($item['view']); ?>" <?php } ?>
    <?php if (isset($item['expandedState'])) { ?> data-expandedstate="<?php p($item['expandedState']); ?>" <?php } ?>
    class="nav-<?php p($item['id']) ?>
		<?php if (isset($item['classes'])) {
		p($item['classes']);
	} ?>
		<?php p($pinned === 1 ? 'first-pinned' : '') ?>
		<?php if (isset($item['defaultExpandedState']) && $item['defaultExpandedState']) { ?> open<?php } ?>"
    <?php if (isset($item['folderPosition'])) { ?> folderposition="<?php p($item['folderPosition']); ?>" <?php } ?>>

    <a href="<?php p(isset($item['href']) ? $item['href'] : '#') ?>"
        class="nav-icon-<?php p(isset($item['icon']) && $item['icon'] !== '' ? $item['icon'] : $item['id']) ?> svg"><?php p($item['name']); ?></a>

    <?php
		NavigationElementMenu($item);
	if (isset($item['sublist'])) {
		?>
    <button class="collapse app-navigation-noclose" <?php if (sizeof($item['sublist']) == 0) { ?> style="display: none"
        <?php } ?>></button>
    <ul id="sublist-<?php p($item['id']); ?>">
        <?php
				foreach ($item['sublist'] as $item) {
					$pinned = NavigationListElements($item, $l, $pinned);
				} ?>
    </ul>
    <?php
	} ?>
</li>

<?php
	return $pinned;
}

/**
 * Prints the HTML for a dotmenu.
 *
 * @param $item The item to be added
 *
 * @return void
 */
function NavigationElementMenu($item) {
	if (isset($item['menubuttons']) && $item['menubuttons'] === 'true') {
		?>
<div id="dotmenu-<?php p($item['id']); ?>" class="app-navigation-entry-utils"
    <?php if (isset($item['enableMenuButton']) && $item['enableMenuButton'] === 0) { ?> style="display: none"
    <?php } ?>>
    <ul>
        <li class="app-navigation-entry-utils-menu-button svg">
            <button id="dotmenu-button-<?php p($item['id']) ?>"></button>
        </li>
    </ul>
</div>
<div id="dotmenu-content-<?php p($item['id']) ?>" class="app-navigation-entry-menu">
    <ul>

    </ul>
</div>
<?php
	}
}