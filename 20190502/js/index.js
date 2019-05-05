var tabs=document.getElementById("tabs").getElementsByTagName("li");
//console.log(tabs);
var lists=document.getElementById("lists").getElementsByTagName("ul");

for(var i=0;i<tabs.length;i++){
    tabs[i].onclick=showList;/* 给每一个li 注册*/
    
}
/*var scrollTop=document.documentElement.scrollTop;监听滚动的高度 */

/*标签的 */
function showList(){
    for (var i=0;i<tabs.length; i++) {
        if(tabs[i]===this){
            tabs[i].className="active";
            lists[i].className="clearfix active";
        }else{
         tabs[i].className="";
         lists[i].className="clearfix";
        }
        
    }
}
var seckillNav=document.getElementById("seckillNav");
window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop;/*监听滚动的高度 */
    /*
    ie -> document.body.scrollTop;
    window.pageYOffset;
    
    */
    if(scrollTop>=260){
        ///.seckill-navfixed
        seckillNav.className="seckill-nav seckill-navfixed";
    }else{
        seckillNav.className="seckill-nav";
    }
}