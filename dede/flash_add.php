<?php
require_once(dirname(__FILE__).'/config.php');
require_once(DEDEINC.'/datalistcp.class.php');
require_once(DEDEINC.'/common.func.php');
if($dopost=="add")
{
	if(is_uploaded_file($_FILES['flashimg']['tmp_name']))
    {
		$tmp_name = $_FILES['flashimg']['tmp_name'];
		
		$name = $_FILES['flashimg']['name'];
		
		// get file extension
		$ext = explode(".", $name);
		$extension = $ext[count($ext) - 1];
		
		$n_name = time();
		
		$img_path =  DEDEROOT."/static/flash/$n_name.$extension";
		
		if(!move_uploaded_file($flashimg, $img_path)){
			ShowMsg("ͼƬ�ϴ�����!", 'flash.php');
			exit;
		}
	} else {
		ShowMsg("û���ϴ�ͼƬ!", 'flash_add.php');
		exit;
	}
	$img_path = str_replace(DEDEROOT, '', $img_path);
	$query = "INSERT INTO #@__flash(img_path, alt, link, sequence) VALUES ('{$img_path}','{$alt}','{$link}', '{$sequence}');";
	
	$dsql->ExecuteNoneQuery($query);
	ShowMsg("��ӳɹ�!", 'flash.php');
	exit;
}
include DedeInclude("templets/flash_add.htm");