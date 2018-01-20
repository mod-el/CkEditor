<?php namespace Model\CkEditor\Fields;

use Model\Form\MField;

class Ckeditor extends MField
{
	protected function renderWithLang(array $attributes, string $lang = null)
	{
		if (isset($attributes['class']))
			$attributes['class'] .= ' ckeditor_textarea';
		else
			$attributes['class'] = 'ckeditor_textarea';

		parent::renderWithLang($attributes, $lang);
	}

	public function getMinWidth(): int
	{
		return 600;
	}

	public function getEstimatedWidth(array $options): int
	{
		return round(600 / $options['column-width']);
	}
}
