<?php namespace Model\CkEditor;

use Model\Core\Module;

class CkEditor extends Module
{
	public function headings()
	{
		?>
		<script type="importmap">
			{
				"imports": {
					"ckeditor5": "https://cdn.ckeditor.com/ckeditor5/42.0.0/ckeditor5.js",
					"ckeditor5/": "https://cdn.ckeditor.com/ckeditor5/42.0.0/"
				}
			}
		</script>
		<script type="module">
			import {checkCkEditor, getCkEditorValue, setCkEditorValue} from "<?= PATH ?>model/CkEditor/files/check.js";

			window.checkCkEditor = checkCkEditor;
			window.getCkEditorValue = getCkEditorValue;
			window.setCkEditorValue = setCkEditorValue;
		</script>
		<?php
	}
}
