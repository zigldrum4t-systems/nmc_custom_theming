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
	<div class="mails-report-section">
  <input id="activity_email_enabled" name="activity_digest" type="checkbox" class="checkbox"
		   value="1" <?php if ($_['activity_digest_enabled']) {
	print_unescaped('checked="checked"');
} ?> />
 <label for="activity_email_enabled"><?php p($l->t('Activity Report')); ?></label>
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
