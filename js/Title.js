var obj01 = document.getElementById("LightDark");
var obj02 = document.getElementById("Title1");
obj01.style.top = "-50px";
obj02.style.top = "-45px";
var T0 = 3;
var px1 = -50;
var px2 = -45;
setTimeout("objOpa01()", T0);
setTimeout("objOpa02()", T0);
setTimeout("jko8787()", T0);
function jko8787(){
	if(obj01.style.top != "100px"){
		px1+=5;
		px2+=5;
		obj01.style.top = px1.toString()+"px";
		obj02.style.top = px2.toString()+"px";
		T0+=0.5;
		setTimeout("jko8787()", T0);
	}else{
		obj01.style.top = "100px";
		obj02.style.top = "105px";
	}
}

var opa01 = 0.1;
var opa02 = 0.1;
function objOpa01(){
	
	obj01.style.opacity = opa01.toString();
	opa01+=0.1;
	if(obj01.style.opacity<1)
		setTimeout("objOpa01()", 50);
	
}
function objOpa02(){
	
	obj02.style.opacity = opa02.toString();
	opa02+=0.1;
	if(obj02.style.opacity<1)
		setTimeout("objOpa02()", 50);
	
}