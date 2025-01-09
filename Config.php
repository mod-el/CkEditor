<?php namespace Model\CkEditor;

use Model\Core\Module_Config;

class Config extends Module_Config
{
	/**
	 */
	protected function assetsList(): void
	{
		$this->addAsset('config', 'config.php', function () {
			return '<?php
$config = ' . var_export(['include-host-in-uploads' => false], true) . ";\n";
		});
	}

	public function getConfigData(): ?array
	{
		return [];
	}
}
