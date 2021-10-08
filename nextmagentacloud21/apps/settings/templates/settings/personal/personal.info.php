<?php

/**
 * @copyright Copyright (c) 2017 Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 * @author Thomas Citharel <tcit@tcit.fr>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

/** @var \OCP\IL10N $l */
/** @var array $_ */

script('settings', [
  'usersettings',
  'templates',
  'federationsettingsview',
  'federationscopemenu',
  'settings/personalInfo',
]);
?>

<div id="personal-settings" data-lookup-server-upload-enabled="<?php p($_['lookupServerUploadEnabled'] ? 'true' : 'false') ?>">
  <h2 class="hidden-visually"><?php p($l->t('Personal info')); ?></h2>
  <div id="personal-settings-avatar-container" class="personal-settings-container">
  <h3><?php p($l->t('Account details')); ?></h3>

  <div class="personal-settings-container">
    <div class="personal-settings-setting-box">
      <form id="displaynameform" class="section">
        <h3>
          <label for="displayname"><?php p($l->t('Name')); ?></label>
          <a href="#" class="federation-menu" aria-label="<?php p($l->t('Change privacy level of full name')); ?>">
            <span class="icon-federation-menu icon-password">
              <span class="icon-triangle-s"></span>
            </span>
          </a>
        </h3>
        <input type="text" id="displayname" name="displayname" <?php if (!$_['displayNameChangeSupported']) {
                                                                  print_unescaped('class="hidden"');
                                                                } ?> value="<?php p($_['displayName']) ?>" autocomplete="on" autocapitalize="none" autocorrect="off" />
        <?php if (!$_['displayNameChangeSupported']) { ?>
          <span><?php if (isset($_['displayName']) && !empty($_['displayName'])) {
                  p($_['displayName']);
                } else {
                  p($l->t('No display name set'));
                } ?></span>
        <?php } ?>
        <span class="icon-checkmark hidden"></span>
        <span class="icon-error hidden"></span>
        <input type="hidden" id="displaynamescope" value="<?php p($_['displayNameScope']) ?>">
      </form>
    </div>
    <div class="personal-settings-setting-box">
      <form id="emailform" class="section">
        <h3>
          <label for="email"><?php p($l->t('Mail address')); ?></label>
          <a href="#" class="federation-menu" aria-label="<?php p($l->t('Change privacy level of email')); ?>">
            <span class="icon-federation-menu icon-password">
              <span class="icon-triangle-s"></span>
            </span>
          </a>
        </h3>
        <div class="verify <?php if ($_['email'] === '' || $_['emailScope'] !== 'public') {
                              p('hidden');
                            } ?>">
          <img id="verify-email" title="<?php p($_['emailMessage']); ?>" data-status="<?php p($_['emailVerification']) ?>" src="
				<?php
        switch ($_['emailVerification']) {
          case \OC\Accounts\AccountManager::VERIFICATION_IN_PROGRESS:
            p(image_path('core', 'actions/verifying.svg'));
            break;
          case \OC\Accounts\AccountManager::VERIFIED:
            p(image_path('core', 'actions/verified.svg'));
            break;
          default:
            p(image_path('core', 'actions/verify.svg'));
        }
        ?>">
        </div>
        <input type="email" name="email" id="email" value="<?php p($_['email']); ?>" <?php if (!$_['displayNameChangeSupported']) {
                                                                                        print_unescaped('class="hidden"');
                                                                                      } ?> placeholder="<?php p($l->t('Your email address')); ?>" autocomplete="on" autocapitalize="none" autocorrect="off" />
        <span class="icon-checkmark hidden"></span>
        <span class="icon-error hidden"></span>
        <?php if (!$_['displayNameChangeSupported']) { ?>
          <span><?php if (isset($_['email']) && !empty($_['email'])) {
                  p($_['email']);
                } else {
                  p($l->t('No email address set'));
                } ?></span>
        <?php } ?>
        <?php if ($_['displayNameChangeSupported']) { ?>
          <em><?php p($l->t('For password reset and notifications')); ?></em>
        <?php } ?>
        <input type="hidden" id="emailscope" value="<?php p($_['emailScope']) ?>">
      </form>
    </div>
    <div class="profile-settings-container">
    <div class="personal-settings-setting-box personal-settings-language-box">
      <?php if (isset($_['activelanguage'])) { ?>
        <form id="language" class="section">
          <h3>
            <label for="languageinput"><?php p($l->t('Language')); ?></label>
          </h3>
          <select id="languageinput" name="lang" data-placeholder="<?php p($l->t('Language')); ?>">
            <option style="" value="<?php p($_['activelanguage']['code']); ?>">
              <?php p($_['activelanguage']['name']); ?>
            </option>
            <optgroup label="––––––––––"></optgroup>
            <?php foreach ($_['commonlanguages'] as $language) : ?>
              <?php if ($language['code'] == "de_DE") { ?>
                <option value="<?php p($language['code']); ?>">
                  <?php p($language['name']); ?>
                </option>
              <?php } ?>
            <?php endforeach; ?>

            <?php foreach (array_unique($_['languages'], SORT_REGULAR) as $language) : ?>
              <?php if ($language['code'] == "en_GB") { ?>
                <option value="<?php p($language['code']); ?>">
                  <?php p($language['name']); ?>
                </option>
              <?php } ?>
            <?php endforeach; ?>


          </select>
          <a href="https://www.transifex.com/nextcloud/nextcloud/" target="_blank" rel="noreferrer noopener">
            <em><?php p($l->t('Help translate')); ?></em>
          </a>
        </form>
      <?php } ?>
    </div>

    <span class="msg"></span>
  </div>
  </div>
  <div class="telekom-link">
  <p><label><?php p($l->t('You can change your password in the')); ?>
  <a href='https://account.idm.telekom.com/account-manager/index.xhtml' target='_blank'>login settings</a>
          <?php p($l->t('for all telekom services.')); ?>
</label>
</p>

    <div class="personal-settings-setting-box personal-settings-group-box section">
    <b><?php p($l->t('Storage utilisation  ')); ?></b>
      <div id="quota" class="personal-info icon-quota">
        <div class="quotatext-bg">
          <p class="quotatext">
            <?php if ($_['quota'] === \OCP\Files\FileInfo::SPACE_UNLIMITED) : ?>
              <?php print_unescaped($l->t(
                '<strong>%1$s</strong> of <strong>%2$s</strong> ',
                [$_['usage'], $_['total_space'],  $_['usage_relative']]
              )); ?>
            <?php else : ?>
              <?php print_unescaped($l->t(
                '<strong>%1$s</strong> of <strong>%2$s</strong>',
                [$_['usage'], $_['total_space'],  $_['usage_relative']]
              )); ?>
            <?php endif ?>
          </p>
        </div>
        <progress value="<?php p($_['usage_relative']); ?>" max="100" <?php if ($_['usage_relative'] > 80) : ?> class="warn" <?php endif; ?>></progress>
      </div>
      <div class="extra-details">
      <div>
        <div id="files"></div>
        <?php print_unescaped($l->t(
                 'Files:<strong>%1$s</strong> ',
                [$_['usage']]
        )); ?>
      </div>
              <div>
              <div id="photos"></div>   <?php print_unescaped($l->t(
                'Photos & videos:<strong>%1$s</strong> ',
                [$_['usage']]
              )); ?></div>
               <div>
               <div id="backup"></div>  <?php print_unescaped($l->t(
                'Live Backups:<strong>%1$s </strong> ',
                [$_['usage']]
              )); ?></div>
               <div>
               <div id="bin"></div> <?php print_unescaped($l->t(
                'Recycle Bin:<strong>%1$s</strong>',
                [$_['usage']]
              )); ?></div>
    </div>
<div>
<?php print_unescaped($l->t(
                'The recycle bin is automatically tide up.'
              )); ?>
</div>
<div>
<?php print_unescaped($l->t(
                'Files that have been in the recycle bin for longer then 30 days are automatically deleted permanently and free up storage space.'
              )); ?>
</div>


  </div>

<?php $totalSpaceInGB = $_['total_space']; ?>
<div id="tarrifInfo" class="personal-settings-tarrif personal-settings-tarrif-box">
  <b><?php p($l->t('Tariff information')); ?></b>
    <div>
        <?php print_unescaped($l->t('<strong>Your tariff</strong>:')); ?>
        <?php
            if ($_['quota'] == 0) {
                p($l->t('No space allocated'));
            }elseif($_['quota'] === \OCP\Files\FileInfo::SPACE_UNLIMITED){
                p($l->t('Magentacloud XXL'));
            }elseif($_['quota'] === \OCP\Files\FileInfo::SPACE_UNKNOWN){
                p($l->t('Space unknown'));
            }elseif($_['quota'] === \OCP\Files\FileInfo::SPACE_NOT_COMPUTED){
                p($l->t('Space not computed'));
            }elseif ($totalSpaceInGB > 0 && $totalSpaceInGB <= 10){
                p($l->t('Magentacloud Free'));
            }elseif ($totalSpaceInGB > 10 && $totalSpaceInGB <= 25){
                p($l->t('Magentacloud S'));
            }elseif ($totalSpaceInGB > 25 && $totalSpaceInGB <= 100){
                p($l->t('Magentacloud M'));
            }else if ($totalSpaceInGB > 100 && $totalSpaceInGB <= 500){
                p($l->t('Magentacloud L'));
            }else if ($totalSpaceInGB >= 500 && $totalSpaceInGB < 1000){
                p($l->t('Magentacloud XL'));
            }else if ($totalSpaceInGB >= 1000){
                p($l->t('Magentacloud XXL'));
            }
        ?>
    </div>
    <div>
        <?php print_unescaped($l->t('<strong>Storage  </strong>: %1$s ', [$_['total_space']])); ?>
    </div>
    <div>
        <button>
        <?php print_unescaped($l->t('Expend storage')); ?>
        </button>
    </div>
<div>


  <div id="personal-settings-group-container">

  </div>

</div>
