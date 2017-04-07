$(function(){
	// banner1**************************/
	var tubox=$(".tubox")
	var blist=$(".blist")
	var bannerbox=$(".bannerbox")[0]
	var bbutonl=$(".bbutonl")[0]
	var bbutonr=$(".bbutonr")[0]
	var num=0
	function change(type){
		type=type||"right"
		if(type=="right"){
			num++;
			if(num>=tubox.length){
				num=0
			}
		}
		if(type=="left"){
			num--;
			if(num<=-1){
				num=tubox.length-1
			}
		}
		for (var i = 0; i < tubox.length; i++) {
		tubox[i].style.opacity=0;
		blist[i].className="blist"
	}
	blist[num].className="blist bactive";
	animate(tubox[num],{opacity:1})
}
var t4=setInterval(change,2000)
bannerbox.onmouseover=function(){
	clearInterval(t4)
   bbutonl.style.display="block"
   bbutonr.style.display="block"
}
bannerbox.onmouseout=function(){
	t4=setInterval(t4)
   bbutonl.style.display="none"
   bbutonr.style.display="none"
}
bbutonl.onclick=function(){
	change("left")
}
bbutonr.onclick=function(){
	change("right")
}
for (var i = 0; i < blist.length; i++) {
	blist[i].name=i
	blist[i].onmouseover=function(){
      for (var j = 0; j < tubox.length; j++) {
      	tubox[j].style.opacity=0
      	blist[j].className="blist"
      };
      blist[this.name].className="blist bactive"
      tubox[this.name].style.opacity=1
      num=this.name
	}

};
/*******************************************************/
var xbanner2=$(".xbanner2")
var buton2l=$(".buton2l")[0]
var buton2r=$(".buton2r")[0]
var xbanner1=$(".xbanner1")[0]
for (var i = 1; i < xbanner2.length; i++) {
	xbanner2[i].style.left="1003px"
};
var now0=0;
var next0=0;
function movev(type){
	type=type||"right"
	if(type=="right"){
		next0++
		if(next0>=xbanner2.length){
			next0=0
		}
		xbanner2[now0].style.left="0px"
		xbanner2[next0].style.left="1003px"
		animate(xbanner2[now0],{left:-1003},1000)
		animate(xbanner2[next0],{left:0},1000)
		now++
		if(next>=xbanner2.length){
			next0=0
		}
		now0=next0
	}

	else if(type=="left"){
		next0--;
		if(next0<=-1){
			next0=xbanner2.length-1
		}
		xbanner2[now0].style.left="0px"
		xbanner2[next0].style.left="-1003px"
		animate(xbanner2[now0],{left:1003},1000)
		animate(xbanner2[next0],{left:0},1000)
		now0++;
		if(next0<=-1){
			next0=xbanner2.length-1
		}
		now0=next0
	}
}
buton2l.onclick=function(){
	movev("left")
}
buton2r.onclick=function(){
	movev("right")
}
xbanner1.onmouseover=function(){
	buton2l.style.display="block";
	buton2r.style.display="block"
}
xbanner1.onmouseout=function(){
	buton2l.style.display="none"
	buton2r.style.display="none"
}
/***************************************/
var cai13=$(".cai13")[0]
var cai2=$(".cai2")
var mum=0
cai13.onclick=function(){
	mum++
	if(mum>=cai2.length){
    mum=0
}
for (var i = 0; i < cai2.length; i++) {
		
		cai2[i].className="cai2"
	}
	cai2[mum].className="cai2 caiactive"
}

/*****************一楼整体************************/
var fili=$(".f1r1i")
var  f32=$(".f32")

for (var i = 0; i < fili.length; i++) {
	fili[i].aa=i
	fili[i].onmouseover=function(){
		for (var j = 0; j< f32.length; j++) {
			f32[j].style.display="none"
			fili[j].className="f1r1i"
			
			};
       f32[this.aa].style.display="block"
       fili[this.aa].className="f1r1i factive"
      
}  
};
/***********************一楼大牌*******************/

var f32tbox=$(".f32tbox")[0]
var f32tbutonl=$(".f32tbutonl")[0]
var f32tbutonr=$(".f32tbutonr")[0]
var f32t1=$(".f32t1")
var f32li=$(".f32li")
for (var i = 1; i < f32t1.length; i++) {
	f32t1[i].style.left="439px"
};
var now=0
var next=0
function move(type){
  type=type||"right"
  if(type=="right"){
  	next++
  	if(next>=f32t1.length){
  		next=0
  	}
  	// f32t1[now].style.left="0px"
  	f32t1[now].style.left="0px"
  	f32t1[next].style.left="439px"
  	animate(f32t1[now],{left:-439})
  	animate(f32t1[next],{left:0})
  	f32li[now].className="f32li"
  	f32li[next].className="f32li f32liactive"
    now++
  	if(next>=f32t1.length){
  		next=0
  	}
  	now=next
}
else if(type=="left"){
   next--;
   if(next<=-1){
   	next=f32t1.length-1
   }
   f32t1[now].style.left="0"
   f32t1[next].style.left="-439px"
   animate( f32t1[now],{left:439})
   animate( f32t1[next],{left:0})
   f32li[now].className="f32li"
  	f32li[next].className="f32li f32liactive"
   now--
   if(next<=-1){
   	next=f32t1.length-1
   }
   now=next
}

}
var t1=setInterval(move,2000)

f32tbox.onmouseover=function(){
	clearInterval(t1)
    f32tbutonl.style.display="block"
	f32tbutonr.style.display="block"
}
f32tbox.onmouseout=function(){
	t1=setInterval(move,2000)
	f32tbutonl.style.display="none"
	f32tbutonr.style.display="none"
}
f32tbutonl.onclick=function(){
	move("left")
}
f32tbutonr.onclick=function(){
	move("right")
}
for (var i = 0; i < f32li.length; i++) {
	f32li[i].aa=i
	f32li[i].onmouseover=function(){
	if(next<=this.aa){
		next=this.aa
		f32t1[now].style.left="0"
		f32t1[next].style.left="439px"
		animate(f32t1[now],{left:-439})
		animate(f32t1[next],{left:0})
        f32li[now].className="f32li"
  	    f32li[next].className="f32li f32liactive"
  	    now=next
	}
	else if(next>this.aa){
       next=this.aa
       f32t1[now].style.left="0px"
      f32t1[next].style.left="-439px"
     animate(f32t1[now],{left:439})
    animate(f32t1[next],{left:0})
     f32li[now].className="f32li"
  	 f32li[next].className="f32li f32liactive"
  	 now=next
  	}
	}
}

/****************二楼******************************/

function xuan(aa){
	var gehu1r1i=$(".gehu1r1i",$(".gehur")[aa])
	
	console.log(gehu1r1i.length)
	
	var gehucr=$(".gehucr",$(".gehuc")[aa])
	for (var i = 0; i < gehu1r1i.length; i++) {
		gehu1r1i[i].na=i;
		gehu1r1i[i].onmouseover=function(){
			for(var j=0;j< gehucr.length;j++){
				gehu1r1i[j].className="gehu1r1i";
				gehucr[j].className="gehucr";

			}
			gehu1r1i[this.na].className="gehu1r1i gefactive";
			gehucr[this.na].className="gehucr gehuactive";
		}
	};
}
for (var i = 0; i < 6; i++) {
	
	xuan(i)
};
/********************二楼大牌***************************/	
function flo(index){
var gehucrslbox=$(".gehucrslbox")[index]
var gehubutonl=$(".gehubutonl")[index]
var gehubutonr=$(".gehubutonr")[index]
var gehucrsl=$(".gehucrsl", gehucrslbox)

var gehuli=$(".gehuli",gehucrslbox)
for (var i = 1; i < gehucrsl.length; i++) {
	gehucrsl[i].style.left="339px"
};
var now1=0
var next1=0
function movee(type){
  type=type||"right"
  if(type=="right"){
  	next1++
  	if(next1>=gehucrsl.length){
  		next1=0
  	}
  	gehucrsl[now1].style.left="0";
  	gehucrsl[next1].style.left="339px"
  	animate(gehucrsl[now1],{left:-339})
  	animate(gehucrsl[next1],{left:0})
  	gehuli[now1].className="gehuli"
  	gehuli[next1].className="gehuli gehuliactive"
    now1++
  	if(next1>=gehucrsl.length){
  		next1=0
  	}
  	now1=next1
}
else if(type=="left"){
   next1--;
   if(next1<=-1){
   	next1=gehucrsl.length-1
   }
   gehucrsl[now1].style.left="0px"
   gehucrsl[next1].style.left="-339px"
   animate(gehucrsl[now1],{left:339})
   animate(gehucrsl[next1],{left:0})
   gehuli[now1].className="gehuli"
  	gehuli[next1].className="gehuli gehuliactive"
   now1--
   if(next1<=-1){
   	next1=gehucrsl.length-1
   }
   now1=next1
}

}
var t3=setInterval(movee,2000)
// gehucrslbox.onmouseover=function(){
//     clearInterval(t3)
//     gehubutonl.style.display="block"
//     gehubutonr.style.display="block"
// }

//  gehucrslbox.onmouseout=function(){
//      t3=setInterval(movee,2000)
//      gehubutonl.style.display="none"
//      gehubutonr.style.display="none"

//  }
// gehubutonl.onclick=function(){
//     movee("left")
// }
// gehubutonr.onclick=function(){
//      movee("right")
// }
for (var j = 0; j < gehuli.length; j++) {
gehuli[j].bb=j
gehuli[j].onmouseover=function(){
if(next1<=this.bb){
       next1=this.bb
       gehucrsl[now1].style.left="0"
       gehucrsl[next1].style.left="339px"
       animate(gehucrsl[now1],{left:-339})
       animate(gehucrsl[next1],{left:0})
       gehuli[now1].className="gehuli"
       gehuli[next1].className="gehuli gehuliactive"
       now1=next1

 	}

 	else if(next1>this.bb){

        next1=this.bb

        gehucrsl[now1].style.left="0"

       gehucrsl[next1].style.left="-339px"

      animate(gehucrsl[now1],{left:339})

     animate(gehucrsl[next1],{left:0})

      gehuli[now1].className="gehuli"

   	 gehuli[next1].className="gehuli gehuliactive"

   	 now1=next1

   	}

 	}

 }
}
for (var i = 0; i < 7; i++) {
	flo(i)
};

/*********************三楼********************/
function xuan1(aa1){
	var floor1r1i=$(".floor1r1i",$(".floorr")[aa1])
	// alert(floor1r1i.length)
	
	
	var floor32r=$(".floor32r",$(".floor32rbox")[aa1])

	alert(floor32r.length)
	for (var i = 0; i < floor1r1i.length; i++) {
		floor1r1i[i].na1=i;
		floor1r1i[i].onmouseover=function(){
			for(var j=0;j< floor32r.length;j++){
				floor1r1i[j].className="floor1r1i";
				floor32r[j].className="floor32r";
			}
			floor1r1i[this.na1].className="floor1r1i gefactive";
			floor32r[this.na1].className="floor32r floor32ra";
		}
	};
}
for (var i = 0; i < 4; i++) {
	xuan1(i)
};

/*********************三楼大牌***********/
function san(oo){
 var floor32rbox=$(".floor32rbox")[oo]
 var f32xbutonl=$(".f32xbutonl")[oo]
 var f32xbutonr=$(".f32xbutonr")[oo]
 var f32xbann=$(".f32xbann",floor32rbox)
 var f32xli=$(".f32xli",floor32rbox)
 for (var i = 1; i < f32xbann.length; i++) {
 	f32xbann[i].style.left="440px"
 };
 var now2=0
 var next2=0
 function movee(type){
   type=type||"right"
   if(type=="right"){
   	next2++
   	if(next2>=f32xbann.length){
   		next2=0
   	}
   	f32xbann[now2].style.left="0"
   	f32xbann[next2].style.left="440px"
   	animate(f32xbann[now2],{left:-440})
   	animate(f32xbann[next2],{left:0})
   	f32xli[now2].className="f32xli"
   	f32xli[next2].className="f32xli f32xliactive"
     now2++
   	if(next2>=f32xbann.length){
   		next2=0
   	}
   	now2=next2
 }
 else if(type=="left"){
    next2--;
    if(next2<=-1){
    	next2=f32xbann.length-1
    }
    f32xbann[now2].style.left="0px"
    f32xbann[next2].style.left="-440px"
    animate(f32xbann[now2],{left:440})
    animate(f32xbann[next2],{left:0})
    f32xli[now2].className="f32xli"
   	f32xli[next2].className="f32xli f32xliactive"
    now2--
    if(next2<=-1){
    	next2=f32xbann.length-1
    }
    now2=next2
 }

 }
 var t2=setInterval(movee,2000)

 // floor32rbox.onmouseover=function(){
 // 	clearInterval(t2)
 //     f32xbutonl.style.display="block"
 // 	f32xbutonr.style.display="block"
 // }
 // floor32rbox.onmouseout=function(){
 // 	t2=setInterval(movee,2000)
 // 	f32xbutonl.style.display="none"
 // 	f32xbutonr.style.display="none"
 // }
 // f32xbutonl.onclick=function(){
 // 	movee("left")
 // }
 // f32xbutonr.onclick=function(){
 // 	movee("right")
 // }
 for (var j = 0; j < f32xli.length; j++) {

 	f32xli[j].bb=j
 	f32xli[j].onmouseover=function(){
 	if(next2<=this.bb){
 		next2=this.bb
 		f32xbann[now2].style.left="0"
 		f32xbann[next2].style.left="440px"
 		animate(f32xbann[now2],{left:-440})
 		animate(f32xbann[next2],{left:0})
         f32xli[now2].className="f32xli"
   	    f32xli[next2].className="f32xli f32xliactive"
   	    now2=next2
 	}
 	else if(next2>this.bb){
        next2=this.bb
        f32xbann[now2].style.left="0"
       f32xbann[next2].style.left="-440px"
      animate(f32xbann[now2],{left:440})
     animate(f32xbann[next2],{left:0})
      f32xli[now2].className="f32xli"
   	 f32xli[next2].className="f32xli f32xliactive"
   	 now2=next2
   	}
 	}
 }
}
for (var i = 0; i < 7; i++) {
	san(i)
};
 // 天天低价
var remensr=$(".remensr")[0]
var remensrr=$(".remensrr")[0]
var remensr1=$(".remensr1")
function bmove(){
  var remensrr=$(".remensrr")[0]
  var first=getfirst(remensrr)
  animate(first,{height:0},function(){
    remensrr.appendChild(first);
    first.style.height="140.5px"

 
  })
}
var t11=setInterval(bmove,3000)
remensrr.onmouseover=function(){
  clearInterval(t11)
}
remensrr.onmouseout=function(){
   t11=setInterval(bmove,3000)
}

// }
// bannerbutonr.onclick=function(){
//    var last=getlaast(banner31)
//     last.style.width="0"
//     banner31.insertBefore(last,getfirst(banner31))
//     animate(last,{width:282})
// }
/******************/
var hongxian=$(".hongxian")[0]
hongxian.onmouseover=function(){
	hongxian.style.left="72px"
	animate(hongxian,{left:845},1000)
}

// 动
var remensc1i=$(".remensc1i")
 for (var i = 0; i <remensc1i.length; i++) {
 	remensc1i[i].onmouseover=function(){
 		this.style.left="10px"
 		// animate(remensc1i[i],{right:10})
 	}
 	remensc1i[i].onmouseout=function(){
 		this.style.left=""
 	}
 };

 var remensli=$(".remensli")[0]
 remensli.onmouseover=function(){
    this.style.left="25px"
 }
 remensli.onmouseout=function(){
 		this.style.left=""
 	}

// 楼层跳转
var  jing2=$(".jing2")[0]
var gur=$(".gur")[0]
var gur1=$(".gur1")
var lou=$(".lou")
var gurz=$(".gurz")
var gurb=$(".gurb")
document.documentElement.scrollTop=1
var obj=document.documentElement.scrollTop?
document.documentElement:document.body
window.onscroll=function(){
	if(obj.scrollTop>=jing2.offsetTop){
		gur.style.display="block"
	}else{
		gur.style.display="none"
	}
	for (var i = 0; i < lou.length; i++) {
		if(obj.scrollTop+100>=lou[i].offsetTop){
			for(var j=0; j<gur1.length; j++){
				gurz[j].style.display="block"
				gurb[j].style.display="none"
			}
			gurz[i].style.display="none"
				gurb[i].style.display="block"
		}
		if(obj.scrollTop+100<lou[0].offsetTop){
			   gurz[0].style.display="none"
				gurb[0].style.display="block"
		}
	};
}

for (var i = 0; i < gur1.length; i++) {
	gur1[i].aa=i;
	gur1[i].onclick=function(){
		animate(obj,{scrollTop:lou[this.aa].offsetTop-100},2000)
	}
};

// 下拉
var header1l=$(".header1l")[0]
var header1lb=$(".header1lb")[0]
hover(header1l,function(){
	
	header1lb.style.display="block"

},function(){
	header1lb.style.display="none"
})


var header1r2=$(".headdd")[0]
var header322a=$(".header322a")[0]
hover(header1r2,function(){
	
	header322a.style.display="block"

},function(){
	header322a.style.display="none"
})

var shoushou=$(".shoushou")[0]
var shoushou1=$(".shoushou1")[0]
hover(shoushou,function(){
	
	shoushou1.style.display="block"

},function(){
	shoushou1.style.display="none"
})

var guanguan=$(".guanguan")[0]
var guanguan1=$(".guanguan1")[0]
hover(guanguan,function(){
	
	guanguan1.style.display="block"

},function(){
	guanguan1.style.display="none"
})

var keke=$(".keke")[0]
var keke1=$(".keke1")[0]
hover(keke,function(){
	
	keke1.style.display="block"

},function(){
	keke1.style.display="none"
})

var wang=$(".wang")[0]
var wangwang=$(".wangwang")[0]
hover(wang,function(){
	
	wangwang.style.display="block"

},function(){
	wangwang.style.display="none"
})

// 固定栏的下拉猜到
var gul3a=$(".gul3a")
var gu132=$(".gu132")
var gu131=$(".gu131")
var gui1=$(".gui1")
var gui2=$(".gui2")
for (var i = 0; i < gu131.length; i++) {
	gu131[i].aa=i
	gu131[i].onmouseover=function(){
        for (var j = 0; j< gu132.length; j++) {
        	gu132[j].style.left="35px";


        };
        animate(gu132[this.aa],{left:-68})
        gui1[this.aa].style.display="none"
        gui2[this.aa].style.display="block"
        gu132[this.aa].style.background="#C51624"
	}
	gu131[i].onmouseout=function(){
       // for (var j = 0; j< gu132.length; j++) {
       //   	gu132[this.aa].style.left="0px";

       // };
        animate(gu132[this.aa],{left:35})
        gui1[this.aa].style.display="block"
        gui2[this.aa].style.display="none"
        gu132[this.aa].style.background="#7A6E6E"
	}


};

// banner下拉菜单
   function cai(i){
   	var banner1l1=$(".banner1-l1")[i]
    var item=$(".drop_down")[i]
     hover(banner1l1,function(){
    item.style.display="block"
   },function(){
	item.style.display="none"
})
   }
	
for (var i = 0; i < 15; i++) {
	cai(i)
};





})