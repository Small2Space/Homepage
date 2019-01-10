var obj_picShower = document.getElementById("picShower");
var shower_top = "55px";
var shower_top_value = -50;
var T1 = 1.0;
var shower_opa = 0.1;

obj_picShower.style.top = "-50px";

setTimeout("showerOpa()", 50);
setTimeout("showerMove()", T1);
function showerMove(){

	if(obj_picShower.style.top!=shower_top){
		obj_picShower.style.top = shower_top_value.toString()+"px"; 
		shower_top_value+=1;
		T1+=0.2;
		setTimeout("showerMove()", T1);
	}
	else{
		
	}

}
function showerOpa(){

	if(obj_picShower.style.opacity!="1.0"){
	
		obj_picShower.style.opacity = shower_opa.toString();
		shower_opa+=0.1;
		setTimeout("showerOpa()", 50);
		
	}
	else{
		
	}

}