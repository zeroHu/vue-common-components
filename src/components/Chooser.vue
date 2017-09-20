<template>
    <div class="chooser">
        <div class="content clearfix">
            <ul>
                <li v-for="(citem,cindex) in chooserData" :class="{ selectd: cindex === nowIndex }" @click="chooseItem(cindex)">{{ citem }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props:['chooserData'],
        data(){
            return{
                nowIndex:0,
            }
        },
        methods:{
            chooseItem(index){
                this.nowIndex = index
                this.$emit('choosed-val',this.chooserData[index])
            }
        }
    }
</script>
<style lang="scss" scoped>
    .clearfix::after{
        content: '';
        display: block;
        height: 0;
        overflow: hidden;
        clear: both;
    }
    .chooser .content{
        width: 210px;
        margin:auto;
        cursor: pointer;
        overflow: hidden;
        ul li {
            float: left;
            margin:10px 5px;
            padding:3px 5px;
            border:1px solid #eee;
        }
        li.selectd {
            background: #567;
            color:#fff;
        }
    }
</style>