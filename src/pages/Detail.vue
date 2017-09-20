<template>
    <div class="detail-wrapper">
        <img src="../assets/logo.png" alt="">
        <div>{{ word }}</div>
        <!-- 功能操作区 -->
        <div class="operat">
            <button @click="dialogJson.isShowDialog = true">show dialog</button>
            <button @click="toastJson.showToast = true">show toast</button>
        </div>

        <!-- dialog 可是使用v-show 或者 v-if -->
        <v-dialog v-show="dialogJson.isShowDialog" :dialog-json="dialogJson" @close-dialog="dialogJson.isShowDialog = false" @callback-or="callbackOrFn"></v-dialog>
        <div>dialog 的操作结果是 <span>{{ dialogJson.callbackOr }}</span></div>

        <!-- toast 必须使用v-if toast mounted函数里面有个倒计时3s就执行的函数-->
        <v-toast  v-if="toastJson.showToast" :toast-json="toastJson" @close-toast="toastJson.showToast = false"></v-toast>

        <!-- calendar -->
        <div>choose calendar</div>
        <v-calendar :default-date="calendar"></v-calendar>
        <div class="router">
          <router-link to="/">go to index</router-link>
        </div>
    </div>
</template>
<script>
import VDialog from '@/components/Dialog'
import VToast from '@/components/Toast'
import VCalendar from '@/components/Calendar'
export default {
    data(){
        return {
            word:'hello 我是detail页面',
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
            },
            // 日历传参
            calendar:"2017-09-20"
        }
    },
    methods:{
        // 接收dialog 触发关闭事件
        callbackOrFn(val){
            this.dialogJson.callbackOr = val;
        }
    },
    components:{
        VDialog,
        VToast,
        VCalendar
    }
}
</script>
<style lang="scss">
    .operat {
        display: flex;
        width: 200px;
        margin:auto;
        button {
            flex: 1;
            border:1px solid #ccc;
        }
    }
</style>