<template>
    <div class="counter">
        <div class="box">
            <span @click="counter('slice')">-</span>
            <input type="number" v-model="counterInitnum" @input="counter">
            <span @click="counter('add')">+</span>
        </div>
    </div>
</template>
<script>
    export default {
        props:['counterInitnum'],
        methods:{
            counter(type){
                if(type == 'add'){
                    this.counterInitnum ++
                }else if(type == 'slice') {
                    this.counterInitnum > 1 ? this.counterInitnum -- : ''
                }
                this.$emit('counter-num',this.counterInitnum)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .box {
        width: 200px;
        margin:auto;
        display: flex;
        cursor:pointer;
        span,input {
            flex: 1;
            border:1px solid #ccc;
        }
        input {
            border-left:0;
            border-right:0;
            flex:60%;
        }
    }
</style>