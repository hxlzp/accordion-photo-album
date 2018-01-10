/**
 * Created by Administrator on 2018/1/9 0009.
 */
(function (window,document) {
    var ul = document.getElementsByTagName('ul')[0];
    var lis = ul.getElementsByTagName('li');
    for(var i = 0;i<lis.length;i++){
        /*获得其父节点*/
        var parentNode ;
        /*获得父节点的所有子节点*/
        var children ;
        mouseover(lis[i],function () {
            /*获得其父节点*/
            parentNode = this.parentNode;
            /*获得父节点的所有子节点*/
            children = parentNode.children;
            for (var j = 0;j < children.length;j++){
                children[j].style['width'] = 33.33 + 'px';
            }
            this.style['width'] = 500 + 'px';
        });
        mouseout(lis[i],function () {
            for (var j = 0;j < children.length;j++){
                children[j].style['width'] = 88 + 'px';
            }
        });
    }
    function on(ele,type,fn) {
        if (ele.addEventListener){
            ele.addEventListener(type,fn,false);
        }else {
            ele.attachEvent('on'+ type,fn);
        }
    }
    function mouseover(ele,fn) {
        on(ele,'mouseover',fn);
    }
    function mouseout(ele,fn) {
        on(ele,'mouseout',fn);
    }

})(window,document)