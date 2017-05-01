/**
 * Created by 89418 on 2017/4/30.
 */
(function () {
    var select = document.querySelectorAll(".search>ul>li");
    var select_target = false;
    var select_content = "";
    for(var i = 0;i < select.length ;i++){
            select[i].addEventListener("click",function () {
                if(select_target){
                    select_content = this.innerHTML;
                    this.innerHTML = select[0].innerHTML;
                    select[0].innerHTML = select_content;
                    this.parentNode.style.overflow = "hidden";
                    select_target = false;
                }else{
                    // alert(1);
                    this.parentNode.style.overflow = "visible";
                    select_target = true;
                }
            })
       };
    var mysliderPic =  document.querySelector(".slider ul");
    var mysliderIcon = document.querySelectorAll(".slider .icon li")
    var arrowPre = document.querySelector(".arrowPre");
    var arrowNext = document.querySelector(".arrowNext");
    slider(mysliderPic,mysliderIcon,arrowPre,arrowNext);
    /*轮播图封装
    * 输入轮播项以及轮播图标项,（左箭头，右箭头，这两个可选）即可
    * */
    function slider(pic,icon,arrowPre,arrowNext) {

        var target = 0,begin = 0,slider_left = 0,index = 0;
        var sliderPic = pic;
        var sliderIcon = icon;
        if(arrowPre&&arrowNext){
            arrowPre.addEventListener("click",function () {
                index--;
                index <=0 ? index = 5: index;
                iconIndex(index);
            });
            arrowNext.addEventListener("click",function () {

                index%=5;
                index++;
                iconIndex(index);
            })
        }
        var timer = setInterval(
            function () {
                if(Math.floor(begin) === target || Math.floor(begin)+1 === target){
                    index++;
                    if(index>5){
                        index = 0;
                        begin = 0;
                        sliderPic.style.left = begin + "px";
                    }
                    iconIndex(index)
                }
                target = -(index) *1205;
                begin = begin+(target-begin)/100;
                sliderPic.style.left = begin + "px";
            },5);
        for(var i = 0;i < sliderIcon.length ;i++){
            sliderIcon[i].index = i;
            sliderIcon[i].addEventListener("click",function (e) {
                index = this.index+1;
               iconIndex(index);
            });
        };
        //图标哪个是ACTIVE
        function iconIndex(index) {
            for(var i = 0;i < sliderIcon.length ;i++){
                sliderIcon[i].className = "";
            }
            sliderIcon[index-1<0?0:index-1].className = "active";
        }
    };

})();
