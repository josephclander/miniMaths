$("li.mod_header").show();
$("li.mod_header").siblings().hide();

$("li.mod_header").click(function(){
	$("li.mod_header").siblings().toggle("fast");
		});