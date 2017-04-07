//**********************1.解决类名的兼容问题***************************************************
function getclass(nameclass,father){
	father= father|| document      //设置father的默认值	
	if (father.getElementsByClassName) {//判断浏览器    现在浏览器的时候
		return father.getElementsByClassName(nameclass)
	}else{                                  //IE的时候
		var newarr=[];
		var all=father.getElementsByTagName("*")//获取所有标签
		for (var i = 0; i < all.length; i++) {//把所有的类名都遍历出来
			if (chongf(nameclass,all[i].className)) {//找出想要的标签
				newarr.push(all[i]);  //赋值给新数组
			};
		}
		return newarr;
	}
}
function chongf(alt,string){    
	var arr=string.split(" ");     //用空格把有多个类名的标签分成数组
	for(var i in arr){      //遍历新数组
		if (arr[i]==alt) {   // 判断新数组和classname的值是否相等
			return true;  // 如果相等返回真
		};
	}
	return false;    //反之返回假
}



//**************************************获取样式的值的兼容问题***********************************
function getstyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}


//***************************************获取元素的兼容函数（可以支持标签。id、class）***********************************

function $(selector,father){
	father=father||document;
	  if (typeof selector=="string") {
		  	selector=selector.replace(/^\s*|\s*$/g,"");//删除字符串中的空格
		  	if (selector.charAt(0)==".") {         //为类名的时候
		  		return getclass(selector.substring(1),father)
		  	}else if(selector.charAt(0)=="#"){      //为id名的时候
		  		return document.getElementById(selector.substring(1));
		  	}else if(/^[a-z][1-6a-z]*/g.test(selector)){    //用正则判断是否是标签  是表签名的时候
		  		return father.getElementsByTagName(selector);
		  	}
	  }else if(typeof selector=="function"){
	  	// window.onload=function(){
	  	// 	selector();
	  	// }
	  	addevent(window,"load",function(){
	  		selector();
	  	})
	  }
}



//*********************获取所有的子节点*********************************************************
//father指定父节点
//ytpe："a"只有元素节点的时候
     // "b"有元素节点和文本的时候
function getchild(father,type){
	type=type||"a"
	var child=father.childNodes;
	var arr=[];
	for (var i = 0; i < child.length; i++) {
		if (type=="a") {    //判断输入的是否是元素节点
			if (child[i].nodeType==1) {
				arr.push(child[i]);     
			}
		}else if(type=="b"){   //输入的是元素节点和文本的时候
			if(child[i].nodeType==1 || (child[i].nodeType==3 && child[i].nodeValue.replace(/^\s*|\s*$/g,"")!="")){         //是元素节点或者是文本节点并且去除文本中的空格，去除空格后，他不是空字符串
				arr.push(child[i]);
			}
		}
	};
	return arr;
}


//***************************************获取第一个子节点*************************

function getfirst(father){
	return getchild(father)[0];
}

//****************************************获取最后一个子节点*************************

function getlast(father){
	return getchild(father)[getchild(father).length-1];
}

//****************************************获取任意一个子节点***************************

function getnum(father,num){
	return getchild(father)[num];
}

//*****************************************获取下一个兄弟节点****************************

function getnex(obj){
	var nex=obj.nextSibling;   //判断有没有下一个兄弟元素  当没有下一个兄弟元素的时候。obj=null
	if (!nex) {               //没有下一个兄弟元素的时候，！nex是真，
		return;
	}
	while(nex.nodeType==3||nex.nodeType==8){    //当下一个兄弟元素是文本节点和注释节点时，接着向下找，因为if只能判断一次，所以用wile；
		nex=nex.nextSibling;       
		if (!nex) {        //判断文本节点和注释节点完了以后是否有兄弟元素
			return;
		}
	}
	return nex;
}

//******************************************获取上一个*****************************

function getup(obj){
	var up=obj.previousSibling;
	if (!up) {
		return;
	};
	while(up.nodeType==3||up.nodeType==8){
		up=up.previousSibling;
		if (!up) {
			return;
		};
	}
	return up;
}


// *******************************************事件绑定兼容函数************************************
function addevent(obj,event,fun){
	obj[fun]=function(){
		fun.call(obj)
	}
	if (obj.attachEvent) {
		obj.attachEvent("on"+event,obj[fun]);
	}else{
		obj.addEventListener(event,obj[fun],false)
	}
}

//*****************************************事件移除兼容函数*****************************************
function removeEvent(obj,event,fun){
	if (obj.detachEvent) {
		obj.detachEvent("on"+event,obj[fun])
	}else{
		obj.removeEventListener(event,obj[fun]);
	}
}
//*****************************************鼠标滚轮兼容问题**********************************************
function gundong(obj,up,down){
	if (obj.attachEvent) {
		obj.attachEvent("onmousewheel",scrollFn);
		//IE、opera浏览器适用
	}else if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false);
		//chrome,safari浏览器适用，webkit是内核
		obj.addEventListener("DOMMouseScroll",scrollFn,false);
		//firefox浏览器适用，moz是内核
	}
	function scrollFn(e){
		e=e||window.event;
		if (e.preventDefault) {
			e.preventDefault();
		}else{
			e.returnValue=false;
		}
		var f=e.wheelDelta||e.detail;
		if (f==-3 || f==120) {
			if (up) {
				up();
			};
		}else if(f==3 || f==-120){
			if (down) {
				down();
			};
		}
	}
}



//hover
//***************************************判断某个元素是否包含有另外一个元素*************************
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//*********************************鼠标移入移出事件***********************************************
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/