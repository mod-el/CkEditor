<?php namespace Model\CkEditor\Fields;

use Model\Form\MField;

class Ckeditor extends MField {
	protected function renderWithLang(array $attributes, $lang = false){
		if(isset($attributes['class']))
			$attributes['class'] .= ' ckeditor_textarea';
		else
			$attributes['class'] = 'ckeditor_textarea';

		parent::renderWithLang($attributes, $lang);
	}

	public function getMinWidth(){
		return 600;
	}

	public function getEstimatedWidth(array $options){
		return round(600/$options['column-width']);
	}
}
