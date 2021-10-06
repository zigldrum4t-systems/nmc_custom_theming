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
 <div>
    <div class="setting-flex-container">
      <div class="setting-fullname-div">
        <div class="personal-settings-setting-box">
          <form id="displaynameform" class="section">
            <h3>
              <label for="displayname"><?php p($l->t('Full name')); ?></label>
              <a href="#" class="federation-menu" aria-label="<?php p($l->t('Change privacy level of full name')); ?>">
                <span class="icon-federation-menu icon-password">
                  <span class="icon-triangle-s"></span>
                </span>
              </a>
            </h3>
            <input type="text" id="displayname" name="displayname"
              <?php if (!$_['displayNameChangeSupported']) {
                      print_unescaped('class="hidden"');
                    } ?>
                  value="<?php p($_['displayName']) ?>"
                  autocomplete="on" autocapitalize="none" autocorrect="off" />
            <?php if (!$_['displayNameChangeSupported']) { ?>
              <span><?php if (isset($_['displayName']) && !empty($_['displayName'])) {
                      p($_['displayName']);
                    } else {
                      p($l->t('No display name set'));
                    } ?></span>
            <?php } ?>
            <span class="icon-checkmark hidden"></span>
            <span class="icon-error hidden" ></span>
            <input type="hidden" id="displaynamescope" value="<?php p($_['displayNameScope']) ?>">
          </form>
        </div>
      </div>
      <div class="setting-email-div">
        <div class="personal-settings-setting-box">
          <form id="emailform" class="section">
            <h3>
              <label for="email"><?php p($l->t('Email')); ?></label>
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
            <input type="email" name="email" id="email" value="<?php p($_['email']); ?>"
              <?php if (!$_['displayNameChangeSupported']) {
                print_unescaped('class="hidden"');
              } ?>
                  placeholder="<?php p($l->t('Your email address')); ?>"
                  autocomplete="on" autocapitalize="none" autocorrect="off" />
            <span class="icon-checkmark hidden"></span>
            <span class="icon-error hidden" ></span>
            <?php if (!$_['displayNameChangeSupported']) { ?>
              <span><?php if (isset($_['email']) && !empty($_['email'])) {
                p($_['email']);
              } else {
                p($l->t('No email address set'));
              }?></span>
            <?php } ?>
            <?php if ($_['displayNameChangeSupported']) { ?>
              <em><?php p($l->t('For password reset and notifications')); ?></em>
            <?php } ?>
            <input type="hidden" id="emailscope" value="<?php p($_['emailScope']) ?>">
          </form>
        </div>
      </div>
    <div>

    <div>
      <div class="profile-settings-container">
        <div class="personal-settings-setting-box personal-settings-language-box">
          <?php if (isset($_['activelanguage'])) { ?>
            <form id="language" class="section">
              <h3>
                <label for="languageinput"><?php p($l->t('Language'));?></label>
              </h3>
              <select id="languageinput" name="lang" data-placeholder="<?php p($l->t('Language'));?>">
                <option value="<?php p($_['activelanguage']['code']);?>">
                  <?php p($_['activelanguage']['name']);?>
                </option>
                <?php foreach ($_['commonlanguages'] as $language):?>
                  <?php if($language['code']=="de_DE" || $language['code']=="en_GB"){ ?>
                    <option value="<?php p($language['code']);?>">
                      <?php p($language['name']);?>
                    </option>
                  <?php } ?>
                <?php endforeach;?>
                <optgroup label="––––––––––"></optgroup>
                <?php foreach ($_['languages'] as $language):?>
                  <?php if($language['code']=="de_DE" || $language['code']=="en_GB"){ ?>
                    <option value="<?php p($language['code']);?>">
                      <?php p($language['name']);?>
                    </option>
                  <?php } ?>
                <?php endforeach;?>
              </select>
              <a href="https://www.transifex.com/nextcloud/nextcloud/"
                  target="_blank" rel="noreferrer noopener">
                <em><?php p($l->t('Help translate'));?></em>
              </a>
            </form>
          <?php } ?>
        </div>
      <span class="msg"></span>
      </div>
    </div>
  <div>


