<?php namespace Model\CkEditor\Fields;

use Model\Form\Field;

class Ckeditor extends Field
{
	protected function renderWithLang(array $attributes, string $lang = null)
	{
		if ($this->options['form'] and $this->options['form']->options['print']) {
			echo $this->getText(['lang' => $lang]);
			return;
		}

		if (isset($attributes['class']))
			$attributes['class'] .= ' ckeditor_textarea';
		else
			$attributes['class'] = 'ckeditor_textarea';

		$this->options['type'] = 'textarea';
		parent::renderWithLang($attributes, $lang);
	}

	public function getText(array $options = []): string
	{
		$text = parent::getText($options);
		if (isset($options['preview']) and $options['preview'])
			$text = html_entity_decode(strip_tags($text), ENT_QUOTES, 'UTF-8');
		return $text;
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
