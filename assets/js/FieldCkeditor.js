class FieldCkeditor extends Field {
	constructor(name, options = {}) {
		super(name, options);
	}

	getSingleNode(lang = null) {
		let node = document.createElement('textarea');

		let attributes = this.options['attributes'];

		if (attributes.hasOwnProperty('class'))
			attributes['class'] += ' ckeditor_textarea';
		else
			attributes['class'] = 'ckeditor_textarea';

		super.assignAttributes(node, attributes);
		super.assignEvents(node, attributes);

		return node;
	}
}

if (formSignatures)
	formSignatures.set('ckeditor', FieldCkeditor);