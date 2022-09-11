<?php namespace Model\CkEditor;

use Model\Core\Module;

class CkEditor extends Module
{
	public function init(array $options)
	{
		\Model\Assets\Assets::enable('jquery');
	}
}
