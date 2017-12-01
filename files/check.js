var ckeditorsArr = [];

function checkCkEditor() {
	return new Promise(function(resolve) {
		if (typeof CKEDITOR === 'undefined')
			return resolve();

		var elements = document.querySelectorAll('.ckeditor_textarea');
		for (var i in elements) {
			if (!elements.hasOwnProperty(i)) continue;
			if (elements[i].offsetParent === null) continue;
			if (elements[i].getAttribute('data-ckeditor-attached') !== null) continue;

			var options = {
				'extraPlugins': 'uploadimage',
				'uploadUrl': base_path + 'model/CkEditor/files/upload.php?type=drop',
				'filebrowserUploadUrl': base_path + 'model/CkEditor/files/upload.php?type=upload',
				'skin': 'moonocolor,' + base_path + 'model/CkEditor/files/skins/moonocolor/'
			};
			if (elements[i].getAttribute('data-ckeditor')) {
				var newOptions = JSON.parse(elements[i].getAttribute('data-ckeditor'));
				if (typeof newOptions === 'object') {
					for (var k in newOptions) {
						options[k] = newOptions[k];
					}
				}
			}

			var editor = CKEDITOR.replace(elements[i], options);
			var index = (ckeditorsArr.push(editor)) - 1;

			elements[i].setAttribute('data-getvalue-function', 'getCkEditorValue');
			elements[i].setAttribute('data-setvalue-function', 'setCkEditorValue');
			elements[i].setAttribute('data-ckeditor-attached', index);

			editor.on('blur', (function (el) {
				return function () {
					if ("createEvent" in document) {
						var evt = document.createEvent("HTMLEvents");
						evt.initEvent("change", false, true);
						el.dispatchEvent(evt);
					} else {
						el.fireEvent("onchange");
					}
				}
			})(elements[i]));
		}
		resolve();
	});
}

window.addEventListener('load', function(){
	observeMutations(checkCkEditor);
});

function getCkEditorValue(){
	if(this.getAttribute('data-ckeditor-attached')===null)
		return null;

	var index = parseInt(this.getAttribute('data-ckeditor-attached'));
	if(typeof ckeditorsArr[index]==='undefined')
		return null;

	return ckeditorsArr[index].getData();
}

function setCkEditorValue(v){
	if(this.getAttribute('data-ckeditor-attached')===null)
		return null;

	var index = parseInt(this.getAttribute('data-ckeditor-attached'));
	if(typeof ckeditorsArr[index]==='undefined')
		return null;

	return ckeditorsArr[index].setData(v);
}