<template>
    <div class="dialog" v-show="dialogJson.isShowDialog" @click="closeModel('mask')">
        <div class="box">
            <span class="close" @click.stop="closeModel('colse')" v-show="dialogJson.isNeedClose">x</span>
            <div class="content">
                <div class="text">{{ dialogJson.contentWord }}</div>
                <div class="button">
                    <div v-for="witem in dialogJson.buttonT" @click.stop="closeModel(witem)">{{ witem }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['dialogJson'],
        data(){
            return{

            }
        },
        methods:{
            closeModel(val){
                if(val == 'mask'  && !this.dialogJson.isNeedModelClick){
                    return;
                }
                this.dialogJson.isShowDialog = false;
                this.$emit('callback-or',val);
            }
        }
    }
</script>
<style scoped>
    .dialog {
        position: fixed;
        z-index: 100;
        top:0;
        bottom:0;
        left: 0;
        right: 0;
        background:rgba(0,0,0,.3);
    }
    .dialog .box {
        position: relative;
        box-sizing: border-box;
        padding:20px 30px;
        width: 300px;
        background: #fff;
        top:50%;
        left:50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .dialog .box .close {
        position: absolute;
        cursor: pointer;
        top:-20px;
        right:0;
    }
    .dialog .box .button {
        display: flex;
    }
    .dialog .box .button div {
        flex: 1;
        line-height: 30px;
        margin-top:10px;
        border:1px solid #ccc;
    }
    .dialog .box .button div:nth-child(2){
        border-left:none;
    }
</style>