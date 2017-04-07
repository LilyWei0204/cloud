function drag(box){
   this.ox=0;
   this.oy=0;
   this.box=box;
   this.cx=0;
   this.cy=0;
   this.ow=this.box.setoffX;
   this.oh=this.box.setoffY;
   this.cw=document.documentElemment.clientWidth;
   thic.ch=document.documentElemment.clientHeight
}
// alert(1)
drag.prototype{
	drags:function(){
		this.down()
	}
	down:function(){
        var this=that;

        this.box.onmouseover=function(e){
            e=e||window.event
        	that.ox=e.setoffX;
        	that.oy=e.setoffY;
        	that.move();
        	that.up()
        }
	},
	move:function(){
         var this=that;
         document.onmousemove=function(e){
         	e=e||window.event
         	that.cx=e.elientX;
         	that.cy=e.elientY;
         	var x=that.cx-that.ox;
         	var y=that.cy-that.oy;
         	that.box.style=x+"px";
         	that.box.style=y+"px"
         }
	},
	up:function(){
      document.onmouseup=function(e){
      	e=e||window.event
      	document.onmouseup=null
      	document.onmousemove=null

      }

      }
	}
}