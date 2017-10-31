$(document).ready(function() {
	// (1) 先获取cookie中用户名和密码值
//	var u = $.cookie("u");
//	var p = $.cookie("p");
	
	// (2) 如何判断有没有 cookie
	//         有： 登陆
	//         没有:  不登陆
	
//	if (p != undefined && u != undefined) {
//		$("#username").val(u); // 放到 input 中
//		$("#password").val(p); // 放到 input 中
//		
//		// 再发  ajax 向服务器发送登陆请求
//	}

	var u = $.cookie("u");
	var p = $.cookie("p");
	
	// (2) 如何判断有没有 cookie
	//         有： 登陆
	//         没有:  不登陆
	
	if (p != undefined && u != undefined) {
		$("#username").val(u); // 放到 input 中
		$("#password").val(p); // 放到 input 中
		
		// 再发  ajax 向服务器发送登陆请求
	}
})


//获取焦点 电话号码  input  清空


$("#box-phone").focus(function(){
	if ($(this).val()=="手机号") {
		$(this).val("");
	}
})
//失去焦点 电话号码
var phoneNum =document.getElementById("box-phone")
	 var phoneStr=phoneNum.value;
$("#box-phone").blur(function(){
	
	 if($(this).val()==""){
		$(this).val("手机号")
	}else if($(this).val()==phoneStr){
		$(this).val(phoneStr)
	}
})

//获取 密码
$("#box-num").focus(function(){
	if ($(this).val()=="密码") {
		$(this).val("");
	}
})
//失去密码
var phoneNum =document.getElementById("box-num")
	 var numStr=phoneNum.value;
$("#box-num").blur(function(){
	
	if($(this).val()==""){
		$(this).val("密码")
	}else if($(this).val()==numStr){
		$(this).val(numStr)
	}
})


//登录判断


$(".loginbox").click(function(){
	
	
	//思路1;判断号码3-20位字母数字下滑线）2判断密码最小长度为6位,最长20）3判断自动登录
	var userPhone =/^[0-9a-zA-Z_]{2,19}$/ ;
	var strP =$("#box-phone").val();
	
	var passWord = /\w{5,19}/;
	var strN= $("#box-num").val()
	
	if(!userPhone.test(strP)){
		alert("手机号：3-20位字母数字下滑线")
	}
	if(!passWord.test(strN)){
		alert("密码：最小长度为6位,最长20字母数字下滑线")
	}
	
	
	if ( $(".loginbox").is(":checked") ) {
		// console.log("勾选了")
		
		// （1） 得到用户名和密码
		var u = $("#username").val();  // 注意input在jQuery中得到值 是用 val
		var p = $("#password").val();
		
		// （2） 存cookie
		$.cookie("u", u, {expires: 7});
		$.cookie("p", p, {expires: 7});
		
	} else {
		console.log("没勾选")
		
	}
	
	var url ="http://h6.duchengjiu.top/shop/api_user.php";
	var data ={
		status:"Login",
		username:"strU",
		password:"strN"
	};
	$.post(url,data,function(obj){
		console.log(obj.code)
		if (obj.code==0) {
			alert("注册成功")
		}else if (obj.code==1001) {
			alert("用户名存在")
		}
		
	})
})
