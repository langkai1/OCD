/*
* @Author: Administrator
* @Date:   2018-07-17 18:21:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-20 17:39:27
*/
window.onload=function(){
	let menu1=document.getElementsByClassName("menu1")[0];
	let body=document.getElementsByTagName("body")[0];
	let open=document.getElementsByClassName("open")[0];
	let cmask=document.getElementsByClassName("c-mask")[0];
	let header=document.getElementsByTagName("header")[1];
	console.log(header);
	menu1.onclick=function(){
		body.style.overflow="-Scroll";
		body.style.overflowY="hidden";
		open.style.width="33%";
        cmask.style.display="block";
        header.style.display="none";
	}
	let bx=document.getElementsByClassName("bx")[1];
	console.log(bx);
	bx.onclick=function(){
		body.style.overflow="visible";
		body.style.overflowY="visible";
		open.style.width=0;
        cmask.style.display="none";
        header.style.display="block";
	}
	header.onclick=function(){
		body.style.overflow="-Scroll";
		body.style.overflowY="hidden";
		open.style.width="33%";
        cmask.style.display="block";
        header.style.display="none";
	}
}	
