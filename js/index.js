/*
* @Author: Administrator
* @Date:   2018-07-17 18:21:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-23 14:04:19
*/
window.onload=function(){
	let menu1=document.getElementsByClassName("menu1");
	let body=document.getElementsByTagName("body")[0];
	let open=document.getElementsByClassName("open")[0];
	let cmask=document.getElementsByClassName("c-mask")[0];
	let header=document.getElementsByTagName("header")[1];
	let ope=document.getElementsByClassName("open")[0];
	console.log(menu1);
	menu1[0].onclick=function(){
		body.style.overflow="-Scroll";
		body.style.overflowY="hidden";
		open.style.right=0;
        cmask.style.display="block";
        header.style.display="none";
 
	}
    menu1[1].onclick=function(){
        body.style.overflow="-Scroll";
        body.style.overflowY="hidden";
        open.style.right=0;
        cmask.style.display="block";
        header.style.display="none";

    }
	let bx=document.getElementsByClassName("bx")[1];
	bx.onclick=function(){
		body.style.overflow="visible";
		body.style.overflowY="visible";
		open.style.right="-452px";
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
