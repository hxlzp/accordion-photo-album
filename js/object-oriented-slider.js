/**
 * Created by Administrator on 2018/1/9 0009.
 */
/**
 * Created by Administrator on 2018/1/9 0009.
 */
(function (window,document) {
    /*构造方法*/
    function Slider() {
        this.initialize.apply(this,arguments);
    }
    /*原型对象*/
    Slider.prototype = {
        /*初始化*/
        initialize:function (id) {
            var _this = this;
            this.wrap = typeof id === 'string'?document.getElementById(id):id;
            this.oUl = this.wrap.getElementsByTagName('ul')[0];
            this.aLi = this.oUl.getElementsByTagName('li');
            for(var i = 0 ;i < this.aLi.length;i++){
                /*获得其父节点*/
                this.parentNode ;
                /*获得父节点的所有子节点*/
                this.children ;
                this.addEvent(this.aLi[i],'mouseover',function () {
                    /* this 指向 li */
                    _this.parentNode = this.parentNode;
                    _this.children = _this.parentNode.children;
                    for (var j = 0;j < _this.children.length;j++){
                        _this.children[j].style['width'] = 33.33 + 'px';
                    }
                    this.style['width'] = 500 + 'px';
                });
                this.addEvent(this.aLi[i],'mouseout',function () {
                    for (var j = 0;j < _this.children.length;j++){
                        _this.children[j].style['width'] = 88 + 'px';
                    }
                })
            }
        },
        /*绑定事件*/
        addEvent:function (ele,type,fn) {
            if (ele.addEventListener){
                ele.addEventListener(type,fn,false);
            }else {
                ele.attachEvent('on' + type , fn);
            }
        },
    }

    /*面向对象*/
    new Slider('wrapper');

})(window,document)