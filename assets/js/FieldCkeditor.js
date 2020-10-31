class FieldCkeditor extends Field {
	constructor(name, options = {}) {
		super(name, options);
	}

	getSingleNode(lang = null) {
		let node = document.createElement('textarea');

		let attributes = this.options['attributes'];

		if(attributes.hasOwnProperty('class'))
			attributes['class'] += ' ckeditor_textarea';
		else
			attributes['class'] = 'ckeditor_textarea';

		super.assignAttributesAndEvents(node, attributes);

		return node;
	}
}

formSignatures.set('ckeditor', FieldCkeditor);