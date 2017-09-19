<template>
    <div class="multiplychooser">
        <div class="content clearfix">
            <ul>
                <li v-for="(mitem,mindex) in multiplyData" :class="{ selectd:nowIndexArr.indexOf(mindex)>-1 }" @click="chooseItem(mindex,mitem)">{{ mitem }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props:['multiplyData'],
        data(){
            return {
                nowIndexArr:[]
            }
        },
        methods:{
            chooseItem(mindex,mitem){
                var nowIndexArr = this.nowIndexArr,
                    multiplyChoosedArr = [],
                    self = this

                if(nowIndexArr.indexOf(mindex) == -1){
                    nowIndexArr.push(mindex)
                }else{
                    nowIndexArr.forEach(function(ritem,rindex){
                        if(ritem == mindex){
                            nowIndexArr.splice(rindex,1)
                        }
                    })
                }
                nowIndexArr.forEach(function(nitem){
                    multiplyChoosedArr.push(self.multiplyData[nitem])
                })
                this.$emit('multiply-choosed',multiplyChoosedArr)
            }
        }
    }
</script>
<style>
    .multiplychooser .content{
        width: 300px;
        margin:auto;
        cursor: pointer;
        overflow: hidden;
    }
    .multiplychooser .content ul li {
        float: left;
        margin:10px 5px;
        padding:3px 5px;
        border:1px solid #eee;
    }
    .clearfix::after{
        content: '';
        display: block;
        height: 0;
        overflow: hidden;
        clear: both;
    }
    .selectd {
        background: #567;
        color:#fff;
    }
</style>