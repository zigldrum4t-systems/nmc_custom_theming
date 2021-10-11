<?php
/**
 * @copyright Copyright (c) 2017 Joas Schilling <coding@schilljs.com>
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
script('activity', 'settings');
style('activity', 'settings');
/** @var array $_ */
/** @var \OCP\IL10N $l */
?>

<form id="activity_notifications" class="section">
	<!-- <p class="settings-hint">
		<?php if ($_['email_enabled']) { ?>
			<?php p($l->t('Choose for which activities you want to get an email or push notification.')); ?>
		<?php } else { ?>
			<?php p($l->t('Choose for which activities you want to get a push notification.')); ?>
		<?php } ?>
	</p> -->
	<h1><?php p($l->t('Regular mails')); ?></h1>

  <div class="mails-report-section">
    <input type="checkbox" class="checkbox" id="monthly_report">
    <label for="monthly_report"><?php p($l->t('Monthly Status Report.')); ?></label>
    <p><?php p($l->t('The status report informs you monthly by email about storage space, your shares and gives you useful tips about the MagentaCLOUD.')); ?></p>
  </div>

  <div class="mails-report-section">
  <input id="activity_email_enabled" name="activity_digest" type="checkbox" class="checkbox"
		   value="1" <?php if ($_['activity_digest_enabled']) {
	print_unescaped('checked="checked"');
} ?> />
 <label for="activity_digest"><?php p($l->t('Activity Report.')); ?></label>
    <p><?php p($l->t('The activity report informs you every morning about all processes in your MagentaCLOUD.')); ?></p>
  </div>


	<?php print_unescaped($this->inc('settings/form')); ?>

	<!-- <h2><?php p($l->t('Activity')); ?></h2>

	<input id="activity_email_enabled" name="activity_digest" type="checkbox" class="checkbox"
		   value="1" <?php if ($_['activity_digest_enabled']) {
	print_unescaped('checked="checked"');
} ?> /> -->
	<!-- <label for="activity_email_enabled"><?php p($l->t('Send daily activity summary in the morning')); ?></label> -->
</form>
