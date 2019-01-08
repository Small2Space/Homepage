var obj = document.getElementById("LightDark");
		var obj2 = document.getElementById("Title1");
		obj.style.top = "-50px";
		obj2.style.top = "-45px";
		var T = 3;
		var px = -50;
		var px2 = -45;
		setTimeout("jko87()", T);
		function jko87(){
			if(obj.style.top != "100px"){
				px+=5;
				px2+=5;
				obj.style.top = px.toString()+"px";
				obj2.style.top = px2.toString()+"px";
				T+=0.5;
				setTimeout("jko87()", T);
			}else{
				obj.style.top = "100px";
				obj2.style.top = "105px";
			}
		}