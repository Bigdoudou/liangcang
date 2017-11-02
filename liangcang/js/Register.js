

$(function(){
		
		
//		if( $(this).val()==arr[i] ){
//			$(this).val("");
//		}
//小图标 效果
$(".join ul li").mouseover(function(){
		$(this).css({"opacity":0.5})
	})
	
	$(".join ul li").mouseout(function(){
		$(this).css({"opacity":1})
	})



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
$("#Txtidcode").focus(function(){
	if ($(this).val()=="输入验证码") {
		$(this).val("");
	}
})
//失去密码
var codeNum =document.getElementById("Txtidcode")
var codeStr=codeNum.value;
	 
$("#Txtidcode").blur(function(){
	
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
var numStr1=numNum.value;
	 
$("#num").blur(function(){
	
	if($(this).val()==""){
		$(this).val("6-20位字符组成，区分大小写")
	}else if($(this).val()==numStr1){
		$(this).val(numStr1)
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
	

//验证码 text  

$.idcode.setCode();
$("#gxCode").click(function(){
	$.idcode.setCode();
})
$(function(){
						
	$.idcode.setCode();

	$("#Txtidcode").change(function(){
		
		var isBy = $.idcode.validateCode()
		console.log(isBy);
		if(!isBy){
			alert("验证码不正确")
		} 
	})
})

/*
$("#gxCode").click(function(){
	$.idcode.setCode();
})

var IsBy=$.idcode.validateCode()
console.log( "code1"+IsBy  )
*/
//验证码
//	var codeNum1 =document.getElementById("idcode")
//	var codeNumstr =$.idcode.setCode()

//$(".numR-top div").css({"background":"white"})
var len=0;
$("#num").keyup(function(){
	$(".numR-top div").css("background","#F5F5F5")
	len=$("#num").val().length;
	console.log("len"+len)
	if(len <=6 ){
		$(".numR-top div").eq(0).css("background","red")
	}else if (len>6&&len<=12){
		$(".numR-top div").eq(0).css("background","red")
		$(".numR-top div").eq(1).css("background","yellow")
	}else if (len>12&&len<=20||len>20){
		$(".numR-top div").eq(0).css("background","red")
		$(".numR-top div").eq(1).css("background","yellow")
		$(".numR-top div").eq(2).css("background","#00d5e8")
	}
})
	
//点击注册  函数 
	$(".loginbox").click(function(){
		
		 numStr=$("#phone1").val();
		 numStr1=$("#num").val();
		 numtureStr=$("#numture").val();

		 codeStr =$("#Txtidcode").val()

//调用返回值，返回值结果为true或者false
     
		 console.log("codeStr"+codeStr)
		console.log(numStr1)
		console.log("点击了")
		
		
		var reg =/^1\d{10}$/;
		var passWord = /\w{5,19}/;
		
		if (!reg.test(numStr)) {	
			alert("手机号码格式不正确")
		}else if (!passWord.test(numStr1)) {
			alert("密码格式不正确")
		}else if (!passWord.test(numtureStr)) {
			alert("密码格式不正确")
		}else if (numStr1!=numtureStr) {
			alert("两次密码不正确")
		}else{
			alert("注册成功")
		}
		
		
		
			var url ="http://h6.duchengjiu.top/shop/api_user.php";
	var data ={
		status:"register",
		username:numStr,
		password:numStr1
	}
	
	console.log(data)
	$.post(url,data,function(obj){
		console.log(obj)
		if (obj.code==0) {
			alert("注册成功")
		}else if (obj.code==1001) {
			alert("用户名存在")
		}	
	})
})
	})
//结尾	
//})