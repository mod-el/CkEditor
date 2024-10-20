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
		<style>
			.ck-editor__editable {
				min-height: 250px;
			}

			.ck.ck-balloon-panel {
				z-index: 10000 !important;
			}
		</style>
		<script type="module">
			import {checkCkEditor, getCkEditorValue, setCkEditorValue, getCkEditorInstance} from "<?= PATH ?>model/CkEditor/files/check.js";

			window.checkCkEditor = checkCkEditor;
			window.getCkEditorValue = getCkEditorValue;
			window.setCkEditorValue = setCkEditorValue;
			window.getCkEditorInstance = getCkEditorInstance;
		</script>
		<?php
	}
}
