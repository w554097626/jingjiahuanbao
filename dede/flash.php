<?php
require_once(dirname(__FILE__).'/config.php');
require_once(DEDEINC.'/datalistcp.class.php');

if(isset($ac) && $ac == 'delete'){
	$query = "DELETE FROM `#@__flash` WHERE `id`='{$id}'";
	$dsql->ExecuteNoneQuery($query);
	ShowMsg("ɾ���ɹ�!", 'flash.php');
	exit;
}
if(isset($ac) && $ac == 'hidden'){
	$query = "UPDATE `#@__flash` SET hidden= 1-hidden WHERE `id`='{$id}'";
	$dsql->ExecuteNoneQuery($query);
	ShowMsg("���óɹ�!", 'flash.php');
	exit;
}
$sql = "SELECT * FROM `#@__flash` ORDER BY sequence ASC";
$dlist = new DataListCP();
$dlist->SetTemplet(DEDEADMIN."/templets/flash.htm");
$dlist->SetSource($sql);
$dlist->display();