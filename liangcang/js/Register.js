

$(function(){
		
		
//		if( $(this).val()==arr[i] ){
//			$(this).val("");
//		}

//请输入手机号
$("#phone1").focus(function(){
	if ($(this).val()=="请输入手机号") {
		$(this).val("");
	}
})
//失去密码
var phoneNum =document.getElementById("phone1")
var numStr=phoneNum.value;
	 
$("#phone1").blur(function(){
	
	if($(this).val()==""){
		$(this).val("请输入手机号")
	}else if($(this).val()==numStr){
		$(this).val(numStr)
	}
})
	
//输入验证码 
$("#code").focus(function(){
	if ($(this).val()=="输入验证码") {
		$(this).val("");
	}
})
//失去密码
var codeNum =document.getElementById("code")
var codeStr=codeNum.value;
	 
$("#code").blur(function(){
	
	if($(this).val()==""){
		$(this).val("输入验证码")
	}else if($(this).val()==codeStr){
		$(this).val(codeStr)
	}
})	
	
//	6-20位字符组成，区分大小写
$("#num").focus(function(){
	if ($(this).val()=="6-20位字符组成，区分大小写") {
		$(this).val("");
	}
})

var numNum =document.getElementById("num")
var numStr=numNum.value;
	 
$("#num").blur(function(){
	
	if($(this).val()==""){
		$(this).val("6-20位字符组成，区分大小写")
	}else if($(this).val()==numStr){
		$(this).val(numStr)
	}
})

//确认密码
$("#numture").focus(function(){
	if ($(this).val()=="确认密码") {
		$(this).val("");
	}
})

var numtureNum =document.getElementById("numture")
var numtureStr=numtureNum.value;
	 
$("#numture").blur(function(){
	
	if($(this).val()==""){
		$(this).val("确认密码")
	}else if($(this).val()==numtureStr){
		$(this).val(numtureStr)
	}
})
	
	
//点击注册  函数 
	$(".loginbox").click(function(){
		console.log("点击了")
		
	})
//结尾	
})