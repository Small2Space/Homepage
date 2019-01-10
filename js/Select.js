//測試物件移動jko87
var obj1 = document.getElementsByName("s1")[0];
var obj2 = document.getElementsByName("s2")[0];
var obj3 = document.getElementsByName("s3")[0];
var obj4 = document.getElementsByName("s4")[0];
var obj5 = document.getElementsByName("s5")[0];

var top2 = 135;
var top3 = 185;
var top4 = 235;
var top5 = 285;

obj2.style.top = "85px";
obj3.style.top = "85px";
obj4.style.top = "85px";
obj5.style.top = "85px";

var T = 3.0;
var px = 85;
var opa0 = 0.1,opa1 = 0.1,opa2 = 0.1,opa3 = 0.1,opa4 = 0.1;
var opaT = 50;
setTimeout("objOpa1()", 1);
function objOpa1(){
	
	obj1.style.opacity = opa0.toString();
	opa0+=0.1;
	if(obj1.style.opacity<1)
		setTimeout("objOpa1()", opaT);
	
}
function objOpa2(){
	
	obj2.style.opacity = opa1.toString();
	opa1+=0.1;
	if(obj2.style.opacity<1)
		setTimeout("objOpa2()", opaT);
}
function objOpa3(){
	
	obj3.style.opacity = opa2.toString();
	opa2+=0.1;
	if(obj3.style.opacity<1)
		setTimeout("objOpa3()", opaT);
}
function objOpa4(){
	
	obj4.style.opacity = opa3.toString();
	opa3+=0.1;
	if(obj4.style.opacity<1)
		setTimeout("objOpa4()", opaT);
}
function objOpa5(){
	
	obj5.style.opacity = opa4.toString();
	opa4+=0.1;
	if(obj5.style.opacity<1){
		setTimeout("objOpa5()", opaT);
	}
}

setTimeout("jko870()", 1);
setTimeout("objOpa2()", 1);
function jko870(){
	if(obj2.style.top != "135px"){
		px+=5;
		obj2.style.top = px.toString()+"px";

		T+=0.5;
		setTimeout("jko870()", T);
	}else{
		obj2.style.top = "135px";

		T = 3;
		px = 135;

		setTimeout("jko871()", T);
		setTimeout("objOpa3()", 1);
	}
}

function jko871(){
	if(obj3.style.top != "185px"){
		px+=5;
		obj3.style.top = px.toString()+"px";

		T+=0.5;
		setTimeout("jko871()", T);
	}else{
		obj3.style.top = "185px";
		T = 3;
		px = 185;

		setTimeout("jko872()", T);
		setTimeout("objOpa4()", 1);
	}
}

function jko872(){
	if(obj4.style.top != "235px"){
		px+=5;
		obj4.style.top = px.toString()+"px";

		T+=0.5;
		setTimeout("jko872()", T);
	}else{
		obj4.style.top = "235px";
		T = 3;
		px = 235;

		setTimeout("jko873()", T);
		setTimeout("objOpa5()", 1);
	}
}

function jko873(){
	if(obj5.style.top != "285px"){
		px+=5;
		obj5.style.top = px.toString()+"px";

		T+=0.5;
		setTimeout("jko873()", T);
	}else{
		obj5.style.top = "285px";
	}
}