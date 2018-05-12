<?php namespace Model\CkEditor;

use Model\Core\Module;

class CkEditor extends Module
{
	/**
	 * @param array $options
	 * @throws \Model\Core\Exception
	 */
	public function init(array $options)
	{
		if (!$this->model->isLoaded('FrontEnd'))
			$this->model->load('FrontEnd');
	}
}
