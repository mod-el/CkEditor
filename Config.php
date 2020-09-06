<?php namespace Model\CkEditor;

use Model\Core\Module_Config;

class Config extends Module_Config
{
	/**
	 */
	protected function assetsList()
	{
		$this->addAsset('config', 'config.php', function () {
			return '<?php
$config = ' . var_export([
					'removePlugins' => 'save',
					'toolbarGroups' => [
						[
							'name' => 'document',
							'groups' => ['document', 'doctools', 'mode'],
						],
						[
							'name' => 'clipboard',
							'groups' => ['clipboard', 'undo'],
						],
						[
							'name' => 'editing',
							'groups' => ['find', 'selection', 'spellchecker', 'editing'],
						],
						[
							'name' => 'styles',
							'groups' => ['styles'],
						],
						[
							'name' => 'forms',
							'groups' => ['forms'],
						],
						[
							'name' => 'links',
							'groups' => ['links'],
						],
						[
							'name' => 'tools',
							'groups' => ['tools'],
						],
						'/',
						[
							'name' => 'basicstyles',
							'groups' => ['basicstyles', 'cleanup'],
						],
						[
							'name' => 'colors',
							'groups' => ['colors'],
						],
						[
							'name' => 'paragraph',
							'groups' => ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'],
						],
						[
							'name' => 'insert',
							'groups' => ['insert'],
						],
						[
							'name' => 'others',
							'groups' => ['others'],
						],
						[
							'name' => 'about',
							'groups' => ['about'],
						],
					],
				], true) . ";\n";
		});
	}
}
