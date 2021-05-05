var ckeditorsArr = [];

function checkCkEditor() {
	if (typeof CKEDITOR === 'undefined')
		return resolve();

	let promises = [];
	let elements = document.querySelectorAll('.ckeditor_textarea');
	for (let i in elements) {
		if (!elements.hasOwnProperty(i)) continue;
		if (elements[i].offsetParent === null) continue;
		if (elements[i].getAttribute('data-ckeditor-attached') !== null) continue;

		promises.push(new Promise(resolve => {
			let options = {
				'extraPlugins': 'image2,pastetools,pastefromword,pastefromgdocs',
				'filebrowserUploadMethod': 'form',
				'uploadUrl': PATHBASE + 'model/CkEditor/files/upload.php?type=drop',
				'filebrowserUploadUrl': PATHBASE + 'model/CkEditor/files/upload.php?type=upload',
				'skin': 'moonocolor,' + PATHBASE + 'model/CkEditor/files/skins/moonocolor/',
				'on': {
					'instanceReady': (function (textarea, resolve) {
						return function (event) {
							let index = (ckeditorsArr.push(event.editor)) - 1;

							textarea.setAttribute('data-getvalue-function', 'getCkEditorValue');
							textarea.setAttribute('data-setvalue-function', 'setCkEditorValue');
							textarea.setAttribute('data-ckeditor-attached', index);

							event.editor.on('blur', (function (el) {
								return function () {
									if ("createEvent" in document) {
										let evt = document.createEvent("HTMLEvents");
										evt.initEvent("change", false, true);
										el.dispatchEvent(evt);
									} else {
										el.fireEvent("onchange");
									}
								}
							})(elements[i]));

							resolve();
						};
					})(elements[i], resolve)
				}
			};
			<?php
			require('../../../app/config/CkEditor/config.php');
			?>
			let customOptions = <?=json_encode($config['ckeditor'])?>;
			for (let k of Object.keys(customOptions))
				options[k] = customOptions[k];

			if (elements[i].getAttribute('data-ckeditor')) {
				let newOptions = JSON.parse(elements[i].getAttribute('data-ckeditor'));
				if (typeof newOptions === 'object') {
					for (let k in newOptions)
						options[k] = newOptions[k];
				}
			}

			elements[i].setAttribute('data-ckeditor-attached', 'attaching');

			CKEDITOR.replace(elements[i], options);
		}));
	}
	return Promise.all(promises);
}

window.addEventListener('load', function () {
	onHtmlChange(checkCkEditor);
});

function getCkEditorValue() {
	if (this.getAttribute('data-ckeditor-attached') === null || this.getAttribute('data-ckeditor-attached') === 'attaching')
		return this.value;

	let index = parseInt(this.getAttribute('data-ckeditor-attached'));
	if (typeof ckeditorsArr[index] === 'undefined')
		return null;

	return ckeditorsArr[index].getData();
}

function setCkEditorValue(v) {
	if (this.getAttribute('data-ckeditor-attached') === null || this.getAttribute('data-ckeditor-attached') === 'attaching') {
		this.value = v;
		return true;
	}

	let index = parseInt(this.getAttribute('data-ckeditor-attached'));
	if (typeof ckeditorsArr[index] === 'undefined')
		return null;

	return new Promise(function (resolve) {
		ckeditorsArr[index].setData(v, {
			callback: function () {
				resolve();
			}
		})
	});
}