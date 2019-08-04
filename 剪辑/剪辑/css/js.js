function fun() {
	var input=document.getElementById("jianji");
	var jianji=input.vaule;
	var newJianji="";
	for (var i=0;i<jianji.length;i++) {
		if(i%2==0){
			newjianji +=jianji.charAt(i).toUpperCase();
//			newName +=name.charAt(i).toUpperCase();
		}
		else{
			newJianji +=jianji.charAt(i).toLowerCase();
		}
	}
	
input.value=newJianji;}
function tanchuang(){
	alert("别点了没数据库，不能输入")
}
function ha(){
	alert("别点了没有鼠标单击事件")
}