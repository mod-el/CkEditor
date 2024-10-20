import {
	ClassicEditor,
	AccessibilityHelp,
	Alignment,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	Bold,
	Code,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlComment,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	MediaEmbed,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SelectAll,
	ShowBlocks,
	SimpleUploadAdapter,
	SourceEditing,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextPartLanguage,
	TextTransformation,
	TodoList,
	Underline,
	Undo,
	WordCount
} from 'ckeditor5';

import FullScreen from "./fullscreen.js";

import translations from 'ckeditor5/translations/it.js';

const editorConfig = {
	toolbar: {
		items: [
			'fullScreen',
			'|',
			'sourceEditing',
			'showBlocks',
			'|',
			'undo',
			'redo',
			'|',
			'heading',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'|',
			'removeFormat',
			'|',
			'link',
			'insertImage',
			'insertTable',
			'highlight',
			'blockQuote',
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'indent',
			'outdent'
		],
		shouldNotGroupWhenFull: true
	},
	plugins: [
		AccessibilityHelp,
		Alignment,
		AutoImage,
		AutoLink,
		Autosave,
		BalloonToolbar,
		BlockQuote,
		Bold,
		Code,
		Essentials,
		FindAndReplace,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		GeneralHtmlSupport,
		Heading,
		Highlight,
		HorizontalLine,
		HtmlComment,
		HtmlEmbed,
		ImageBlock,
		ImageCaption,
		ImageInline,
		ImageInsert,
		ImageInsertViaUrl,
		ImageResize,
		ImageStyle,
		ImageTextAlternative,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		MediaEmbed,
		PageBreak,
		Paragraph,
		PasteFromOffice,
		RemoveFormat,
		SelectAll,
		ShowBlocks,
		SimpleUploadAdapter,
		SourceEditing,
		SpecialCharacters,
		SpecialCharactersArrows,
		SpecialCharactersCurrency,
		SpecialCharactersEssentials,
		SpecialCharactersLatin,
		SpecialCharactersMathematical,
		SpecialCharactersText,
		Strikethrough,
		Subscript,
		Superscript,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		TextPartLanguage,
		TextTransformation,
		TodoList,
		Underline,
		Undo,
		WordCount,
		FullScreen,
	],
	balloonToolbar: [
		'fontSize',
		'fontFamily',
		'fontColor',
		'fontBackgroundColor',
		'|',
		'bold',
		'italic',
		'underline',
		'|',
		'link',
		'insertImage',
	],
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [10, 12, 14, 'default', 18, 20, 22],
		supportAllValues: true
	},
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2'
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3'
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4'
			},
			{
				model: 'heading5',
				view: 'h5',
				title: 'Heading 5',
				class: 'ck-heading_heading5'
			},
			{
				model: 'heading6',
				view: 'h6',
				title: 'Heading 6',
				class: 'ck-heading_heading6',
			},
		],
	},
	htmlSupport: {
		allow: [
			{
				name: /^.*$/,
				styles: true,
				attributes: true,
				classes: true,
			},
		],
	},
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage',
		]
	},
	language: 'it',
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	menuBar: {
		isVisible: true
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	},
	translations: [translations],
	simpleUpload: {
		uploadUrl: PATH + 'model/CkEditor/files/upload.php',
		withCredentials: true,
	},
};

var ckeditorsArr = [];

export async function checkCkEditor() {
	let promises = [];
	let elements = document.querySelectorAll('.ckeditor_textarea');
	for (let textarea of elements) {
		if (textarea.offsetParent === null || textarea.getAttribute('data-ckeditor-attached') !== null)
			continue;

		textarea.setAttribute('data-ckeditor-attached', 'attaching');

		promises.push(ClassicEditor.create(textarea, editorConfig).then(editor => {
			const index = ckeditorsArr.push(editor) - 1;
			textarea.setAttribute('data-ckeditor-attached', String(index));

			textarea.setAttribute('data-getvalue-function', 'getCkEditorValue');
			textarea.setAttribute('data-setvalue-function', 'setCkEditorValue');

			editor.model.document.on('change:data', () => {
				textarea.value = editor.getData();
				triggerOnChange(textarea);
			});
		}));
	}
	return Promise.all(promises);
}

export function getCkEditorInstance(index = 0) {
	if (typeof ckeditorsArr[index] === 'undefined')
		return null;

	return ckeditorsArr[index];
}

export function getCkEditorValue() {
	if (this.getAttribute('data-ckeditor-attached') === null || this.getAttribute('data-ckeditor-attached') === 'attaching')
		return this.value;

	const index = parseInt(this.getAttribute('data-ckeditor-attached'));
	if (typeof ckeditorsArr[index] === 'undefined')
		return null;

	return ckeditorsArr[index].getData();
}

export function setCkEditorValue(v) {
	if (this.getAttribute('data-ckeditor-attached') === null || this.getAttribute('data-ckeditor-attached') === 'attaching') {
		this.value = v;
		return true;
	}

	const index = parseInt(this.getAttribute('data-ckeditor-attached'));
	if (typeof ckeditorsArr[index] === 'undefined')
		return null;

	return ckeditorsArr[index].setData(String(v));
}

window.addEventListener('load', function () {
	onHtmlChange(checkCkEditor);
});
