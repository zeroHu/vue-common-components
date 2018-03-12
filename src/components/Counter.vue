<template>
    <div class="counter">
        <div class="box">
            <span @click="counter('slice')">-</span>
            <input type="number" v-model="numInitnum" @input="counter">
            <span @click="counter('add')">+</span>
        </div>
    </div>
</template>
<script>
    export default {
        props:['counterInitnum'],
        data () {
            return {
                'numInitnum': this.counterInitnum
            }
        },
        methods:{
            counter(type){
                if(type == 'add'){
                    this.numInitnum ++
                }else if(type == 'slice') {
                    this.numInitnum > 1 ? this.numInitnum -- : ''
                }
                this.$emit('counter-num',this.numInitnum)
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