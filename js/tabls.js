$(document).ready(function() {
	//带有复选框的表格
	$('.table-check tbody tr').click(function(event) {//点击表单行
		if ($(this).find('input[type=checkbox]').is(':checked')) {//判断这一行是否北选中
			$(this).find('input[type=checkbox]').attr('checked',false);//设置这一行的选中状态
		} else {
			$(this).find('input[type=checkbox]').attr('checked',true);//设置这一行的选中状态
		}
		allChecked();
		//changIcon();
	});

	$('.table-check thead tr').click(function(event) {//点击表头行
		if ($(this).find('input[type=checkbox]').is(':checked')) {//判断这一行是否北选中
			$(this).find('input[type=checkbox]').attr('checked',false);//设置这一行的选中状态
			$(this).parent().next().find('tr td input[name=items]').attr('checked',false);//设置tbody的选中状态
		} else {
			$(this).find('input[type=checkbox]').attr('checked',true);//设置这一行的选中状态
			$(this).parent().next().find('tr td input[name=items]').attr('checked',true);//设置tbody的选中状态
		}
	});


	function allChecked(){//判断是否全选中
		var flag = true;
		$('.table-check tbody input[type=checkbox]').each(function(){
			if (!$(this).is(':checked')) {
				flag = false;
			}
		});
		$('#CheckedAll').attr('checked',flag);
	}

	function changIcon(){
		if ($(this).find('input[type=checkbox]').is(':checked')) {
			$(this).find('input[type=checkbox]').next().show();
			$(this).find('input[type=checkbox]').addClass('on');//on定义了input[type=checkbox]的透明度为0；
		} else {
			$(this).find('input[type=checkbox]').next().hide();
			$(this).find('input[type=checkbox]').removeClass('on');//on定义了input[type=checkbox]的透明度为0；
		}
	}

});