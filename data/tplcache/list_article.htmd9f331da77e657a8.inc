<?php
$z[0]=Array("global","",189,215);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("global","",259,289);
$z[1][4]['name']="cfg_description";
$z[2]=Array("global","",326,353);
$z[2][4]['name']="cfg_keywords";
$z[3]=Array("global","",506,538);
$z[3][4]['name']="cfg_templets_skin";
$z[4]=Array("global","",603,635);
$z[4][4]['name']="cfg_templets_skin";
$z[5]=Array("global","",742,774);
$z[5][4]['name']="cfg_templets_skin";
$z[6]=Array("global","",850,882);
$z[6][4]['name']="cfg_templets_skin";
$z[7]=Array("global","",948,980);
$z[7][4]['name']="cfg_templets_skin";
$z[8]=Array("include","",1349,1384);
$z[8][4]['filename']="head.htm";
$z[9]=Array("global","",1492,1524);
$z[9][4]['name']="cfg_templets_skin";
$z[10]=Array("global","",1601,1633);
$z[10][4]['name']="cfg_templets_skin";
$z[11]=Array("field","",3804,3833);
$z[11][4]['name']="position";
$z[12]=Array("field","",3923,3952);
$z[12][4]['name']="typename";
$z[13]=Array("channel","\r\n      <li id=\"nn[field:global name=autoindex runphp=\"yes\"]@me=@me-1;[/field:global]\"><a href='[field:typeurl/]'>[field:typename/]</a></li>\r\n ",4026,4288);
$z[13][4]['type']="son";
$z[13][4]['currentstyle']="<li><a href='~typelink~' class='thisclass'>~typename~</a></li>";
$z[14]=Array("arclist","\r\n        	<dl class=\"pointlist\">\r\n                <dd><a href=\"[field:arcurl/]\"><img alt=\"[field:title function='html2text(@me)'/]\" src=\"[field:litpic/]\" /></a></dd>\r\n                <dt><a href=\"[field:arcurl/]\">[field:title/]</a><p>[field:description function='html2text(@me)' function='cn_substr(@me,90)'/]...</p><a href=\"[field:arcurl/]\" class=\"desc1\">�鿴����</a></dt>\r\n            </dl>\r\n          ",5005,5483);
$z[14][4]['flag']="h";
$z[14][4]['limit']="0,1";
$z[14][4]['infolen']="230";
$z[14][4]['typeid']="2";
$z[15]=Array("list","\r\n                        <div class=\"pointlist2\">\r\n                            <div class=\"ptpic\"><a href=\"[field:arcurl/]\"><img alt=\"[field:title function='html2text(@me)'/]\" src=\"[field:litpic/]\" /></a></div>\r\n                            <div class=\"ptright\">\r\n                                <div class=\"pttit\"><a href=\"[field:arcurl/]\">[field:title/]</a><span>[field:pubdate function=\"MyDate('Y-m-d',@me)\"/]</span></div>\r\n                                <p>[field:description function='html2text(@me)' function='cn_substr(@me,50)'/]...<a href=\"[field:arcurl/]\" class=\"desc1\">����</a></p>\r\n                            </div>\r\n                        </div>\r\n                ",5537,6252);
$z[15][4]['pagesize']="10";
$z[16]=Array("pagelist","",6865,6943);
$z[16][4]['listitem']="info,index,end,pre,next,pageno,option";
$z[16][4]['listsize']="5";
$z[17]=Array("arclist","\r\n                                <li><div class=\"img\"><a href=\"[field:arcurl/]\"><img alt=\"[field:title function='html2text(@me)'/]\" src=\"[field:litpic/]\" width=\"224\" height=\"170\"/></a></div></li>\r\n                             ",7228,7562);
$z[17][4]['row']="5";
$z[17][4]['orderby']="pubdate";
$z[17][4]['type']="image.";
$z[17][4]['imgwidth']="224";
$z[17][4]['imgheight']="170";
$z[17][4]['typeid']="top";
$z[18]=Array("sql","[field:content function='html2text(cn_substr(@me,70))'/]...",7908,8038);
$z[18][4]['sql']="Select content from dede_arctype where id=6";
$z[19]=Array("sql","[field:content function='html2text(cn_substr(@me,70))'/]...",8454,8584);
$z[19][4]['sql']="Select content from dede_arctype where id=6";
$z[20]=Array("sql","[field:content function='html2text(cn_substr(@me,70))'/]...",9015,9145);
$z[20][4]['sql']="Select content from dede_arctype where id=6";
$z[21]=Array("include","",9412,9449);
$z[21][4]['filename']="footer.htm";

?>