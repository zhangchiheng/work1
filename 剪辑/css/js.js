function fun () {
	var input=document.getElementById("jianji");
	var name=input.vaule;
	var newJianji="";
	for (var i=0;i<=jianji.length;i++) {
		if(i%2==0){
			newjianji +=name.charAt(i).toUpperCase();
		}
		else{
			newJianji +=name.charAt(i).toLowerCase();
		}
	}
	input.value=newJianji;
}