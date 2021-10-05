<?php
/**
 * @copyright Copyright (c) 2016 Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
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

style('settings', 'settings');
script('settings', [ 'settings', 'admin', 'log']);
script('core', 'setupchecks');
script('files', 'jquery.fileupload');

?>

<div id="app-navigation">
	<ul>
		<?php if (!empty($_['forms']['admin'])) { ?>
			<li class="app-navigation-caption"><?php p($l->t('Personal')); ?></li>
		<?php
		}?>

		<li <?php print_unescaped($form['active'] ? ' class="active"' : ''); ?>>
					<a href="<?php p($anchor); ?>">
							<span>Account Information</span>
					</a>
		</li>
		<li <?php print_unescaped($form['active'] ? ' class="active"' : ''); ?>>
					<a href="<?php p($anchor); ?>">
							<span>Devices & sessions</span>
					</a>
		</li>

		<li <?php print_unescaped($form['active'] ? ' class="active"' : ''); ?>>
					<a href="<?php p($anchor); ?>">
							<span>Notifications</span>
					</a>
		</li>
				
	</ul>
</div>

<div id="app-content">
	<?php print_unescaped($_['content']); ?>
</div>
