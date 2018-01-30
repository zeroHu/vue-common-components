# vue-common-components
#### 备注
    很多dialog组件和toast组件等，可是都有一定的不灵活性，如果去下载别人的代码比较不太灵活，所以写几个经常用的组件，代码都是以组件的形式套用，非常灵活。便于修改。

> [体验功能地址](http://www.zeroyh.cn/vue/)

> 主要组件介绍

* 可配置型弹框（dialog)
* 可配置toast (toast)
* 单选
* 多选
* counter计算
* 日历
* input框 search 出一个数组 然后选择select

```
可配置参数和说明
// dialog 传参
dialogJson:{
    isShowDialog:false,//初始默认弹框的是否显示
    isNeedClose:true,//是否需要右上角关闭按钮
    isNeedModelClick:false,//是否需要点击蒙层关闭弹窗
    contentWord:'我是dialog文案',//弹窗提示文案
    buttonT:['取消','确定'],//弹窗下方按钮文案和个数控制如不需要button 则传空数组
    callbackOr:''//获取dialog操作的详情 比如点击确定 或者 点击x 或者点击mask
},
// toast 传参
toastJson:{
    showToast:false,//是否显示toast弹窗
    showtime:3000,//toast停留时间
    contentWord:'这是toa这是toa这是toa这是toa这是toa这是toa这是toa'//toast提示语言
}
// 日历传参
calendarJson :{
    showcalendar:false,
    date:"2017-08-20",
    choosedCalendarDate:''
}
```

> 组件效果图

![图片](http://oqt0cgoq9.bkt.clouddn.com/vue-components-muchooer.jpg)
![图片](http://oqt0cgoq9.bkt.clouddn.com/vue-components-dialog.jpg)
![图片](http://oqt0cgoq9.bkt.clouddn.com/vue-components-toast.jpg)
![图片](http://oqt0cgoq9.bkt.clouddn.com/vue-components-chooser.jpg)
![图片](http://oqt0cgoq9.bkt.clouddn.com/vue-components-selections.jpg)
![图片](http://oqt0cgoq9.bkt.clouddn.com/vue-components-counter.jpg)
![图片](http://oqt0cgoq9.bkt.clouddn.com/vue-components-calendar.jpg)

> 项目执行步骤

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```




