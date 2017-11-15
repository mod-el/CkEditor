<?php
require_once('..'.DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'..'.DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR.'config'.DIRECTORY_SEPARATOR.'config.php');

$url = null;

if(isset($_FILES['upload'])){
	$path = '../../../app-data/img/uploads/';
	if(!is_dir($path))
		mkdir($path, 0777, true);

	if($_FILES['upload']['error'] == UPLOAD_ERR_OK and is_uploaded_file($_FILES['upload']['tmp_name'])){
		$ext = pathinfo($_FILES['upload']['name'], PATHINFO_EXTENSION);

		do{
			$filename = mt_rand();
		}while(file_exists($path.$filename.'.'.$ext));

		if(move_uploaded_file($_FILES['upload']['tmp_name'], $path.$filename.'.'.$ext)){
			$url = PATH.'app-data/img/uploads/'.$filename.'.'.$ext;
		}else{
			$error = 'Error in saving file, please retry';
		}
	}else{
		$error = 'Error '.$_FILES['upload']['error'].' in uploading file, please retry';
	}
}else{
	$error = 'No file detected';
}

switch($_GET['type']){
	case 'drop':
		if(isset($error)){
			$response = [
				'uploaded' => 0,
				'error' => [
					'message' => $error,
				],
			];
		}elseif(isset($url, $filename)){
			$response = [
				'uploaded' => 1,
				'fileName' => $filename.'.'.$ext,
				'url' => $url,
			];
		}else{
			$response = [
				'uploaded' => 0,
				'error' => [
					'message' => 'An unknown error occurred',
				],
			];
		}

		echo json_encode($response);
		break;
	case 'upload':
		?>
		<script>window.parent.CKEDITOR.tools.callFunction(<?=$_GET['CKEditorFuncNum']?>, <?=json_encode($url)?>, <?=isset($error) ? json_encode($error) : 'null'?>)</script>
		<?php
		break;
}
