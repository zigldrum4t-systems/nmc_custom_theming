<?php /** @var \OCP\IL10N $l */ ?>
<div id="controls">
	<div id="file_action_panel"></div>
</div>
<div id='notification'></div>

<div id="emptycontent" class="hidden">
	<div class="icon-delete"></div>
	<h2><?php p($l->t('No deleted files')); ?></h2>
	<p><?php p($l->t('You will be able to recover deleted files from here')); ?></p>
</div>

<input type="hidden" name="dir" value="" id="dir">

<div class="nofilterresults emptycontent hidden">
	<div class="icon-search"></div>
	<h2><?php p($l->t('No entries found in this folder')); ?></h2>
	<p></p>
</div>

<table id="filestable" class="list-container <?php p($_['showgridview'] ? 'view-grid' : '') ?>">
	<thead>
		<tr>
			<th id="headerSelection" class="hidden column-selection">
				<input type="checkbox" id="select_all_trash" class="select-all checkbox"/>
				<label for="select_all_trash">
					<span class="hidden-visually"><?php p($l->t('Select all'))?></span>
				</label>
			</th>
      <th id='allLabel'><?php p($l->t('All')); ?></th>
			<th id='headerName' class="hidden column-name">
          <div id="headerName-container">
		      <a class="name sort columntitle" data-sort="name">
            <span><?php p($l->t('Name')); ?></span>
            <span class="sort-indicator"></span>
			      <span class="headerSizeOpen">(</span>
						<span id="headerSizeCount" class="column-size">
							<?php p($l->t('Size')); ?>
						</span>
						<span class="headerSizeOpen">)</span>
					</a>
				  </div>
			</th>
      <th id="headerDate" class="hidden column-mtime">
        <a id="modified" class="columntitle" data-sort="mtime"><span><?php p($l->t('Deleted')); ?></span><span class="sort-indicator"></span></a>
      </th>
      <th id="selectedMenu">
				<div id="selectedActionsList" class="selectedActions">
				</div>
			</th>
			<th>
				<span id="selectedActionLabel">
					<a href="" class="actions-selected">
						<span class="icon icon-more"></span>
						<span><?php  p($l->t('Actions'))?></span>
					</a>
				</span>
			</th>
		</tr>
	</thead>
	<tbody id="fileList">
	</tbody>
	<tfoot>
	</tfoot>
</table>
